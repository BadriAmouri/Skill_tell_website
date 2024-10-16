import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bgreg.svg";
import "../index.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',            // *
    email: '',               // *
    phoneNumber: '',         // *
    school: '',
    wereMember: '',          // * (boolean or 'yes'/'no')
    commentLastSeason: '',   // Only show if wereMember is true
    motivation: '',          // *
    addition: '',            // Optional
  });
  
  const [Success , setSuccess] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleNext = () => {
    const currentFieldName = Object.keys(formData)[currentStep];

    if (formData[currentFieldName] === '' && currentFieldName !== 'commentLastSeason' && currentFieldName !== 'addition') {
      setError(`Please fill in the ${currentFieldName.replace(/^\w/, (c) => c.toUpperCase())} field.`);
      return;
    }

    if (currentFieldName === 'email' && !validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (currentFieldName === 'phoneNumber' && !validatePhoneNumber(formData.phoneNumber)) {
      setError('Phone number must contain exactly 10 digits.');
      return;
    }

    if (currentFieldName === 'wereMember' && formData.wereMember === 'No') {
      // Skip the commentLastSeason step if the user was not a member
      setCurrentStep((prev) => prev + 2);
      setError(null);
      return;
    }

    setError(null);
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/'); 
    } else {
      if (currentStep === 5 && formData.wereMember === 'No') {
        // If going back to the 'wereMember' step and skipping the 'commentLastSeason'
        setCurrentStep((prev) => prev - 2);
      } else {
        setCurrentStep((prev) => prev - 1);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send
    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      school: formData.school,
      wereMember: formData.wereMember,
      commentLastSeason: formData.commentLastSeason,
      motivation: formData.motivation,
      addition: formData.addition
    };

    // Send the data to Google Apps Script Web App
    fetch("https://script.google.com/macros/s/AKfycbyT7lRlmMYvVFwIljDJQ0qNhma-xqRYyCnPLOMDuMqh90yN_IbszzWnykaE5jaNLmIm/exec", {
      method: "POST",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("Success")) {
          setSuccess("registered successfully");
          
          setTimeout(() => {
            navigate("/");
          }, 4000);
        } else {
          throw new Error("Failed to submit data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-screen h-screen flex bg-[#2D0439] justify-center items-center bg-gradient-form bg-cover bg-center text-white"
     style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="blob-inner-container blur-[40px] rounded-[9999px] absolute left-0 right-0 m-auto overflow-hidden w-[90%] md:w-[45%] h-[50%] md:h-[60%] opacity-90">
        <div className="blob absolute inset-0 w-[90%] md:w-[95%] h-[100%] md:h-[90%]">
          <div className="blob-mini absolute inset-0 left-10 right-0 m-auto w-[190px] h-[230px] md:w-[60%] md:h-[70%] rounded-[999px]"></div>
        </div>
      </div>

      <div className="w-full max-w-2xl h-[50%] p-12 bg-black/20 flex justify-center  flex-col backdrop-blur-2xl relative border border-gray-300 rounded-xl md:rounded-[30px] max-sm:mx-8 sm:mx-8">
        {error && (
          <div className="bg-red-100 text-red-800 p-3 mb-4 rounded-lg">
            {error}
          </div>
        )}
        {Success && (
          <div className="bg-green-100 text-green-600 p-3 mb-4 rounded-lg">
            {Success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div>
              <label htmlFor="fullName" className="block text-lg font-semibold">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border text-black p-2 mt-2 rounded-lg"
              />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border text-black p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-semibold">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number (10 digits)"
                className="w-full border text-black p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label htmlFor="school" className="block text-lg font-semibold">School</label>
              <select 
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full border p-2 text-black rounded-lg mt-2"
              >
                <option value="" disabled>Select your school</option>
                <option value="ENSIA">ENSIA - National higher school of artificial intelligence</option>
                <option value="ENSM">ENSM - National higher school of mathematics</option>
                <option value="ENSSA">National higher school of autonomous systems</option>
                <option value="ENSNT">National higher school of nano technologies</option>
                <option value="ENSCS">National higher school of cyber security</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <label htmlFor="wereMember" className="block text-lg font-semibold">Were you a member last year? (Yes/No)</label>
              <select
                id="wereMember"
                name="wereMember"
                value={formData.wereMember}
                onChange={handleChange}
                className="w-full border p-2 text-black rounded-lg mt-2"
              >
                <option value="" disabled>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          )}

          {currentStep === 5 && formData.wereMember === 'Yes' && (
            <div>
              <label htmlFor="commentLastSeason" className="block text-lg font-semibold">Feel free to drop any comments about last season (optional)</label>
              <input
                type="text"
                id="commentLastSeason"
                name="commentLastSeason"
                value={formData.commentLastSeason}
                onChange={handleChange}
                placeholder="Your comments"
                className="w-full border p-2 text-black rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <label htmlFor="motivation" className="block text-lg font-semibold">Motivation</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Explain why you want to join"
                className="w-full border p-2 text-black rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 7 && (
            <div>
              <label htmlFor="addition" className="block text-lg font-semibold">Addition (optional)</label>
              <input
                type="text"
                id="addition"
                name="addition"
                value={formData.addition}
                onChange={handleChange}
                placeholder="Any additional info you'd like to share?"
                className="w-full border p-2 text-black rounded-lg mt-2"
              />
            </div>
          )}
<div className="flex justify-between mt-6 ">
{currentStep > 0 && (
<button
    type="button"
    onClick={handleBack}
    className="border-2 md:mb-4 md:ml-4  border-[#6208AD] text-white py-2 px-4 rounded-[30px] absolute bottom-4 left-4 bg-transparent flex items-center focus:outline-white"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  Back
</button>
)}
{currentStep < 7 && (
<button
    type="button"
    onClick={handleNext}
    className="mt-4 md:mb-4 md:mr-4  bg-[#6208AD] bg-opacity-55  text-white py-2 px-4 rounded-[30px] absolute bottom-3 right-3 flex items-center focus:outline-none border border-whitet"
   
>
  Next
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
)}
{currentStep === 7 && (
  <button
  type="submit"
  onClick={handleSubmit}
  className="mt-4 md:mb-4 md:mr-4  bg-[#6208AD] bg-opacity-55  text-white py-2 px-4 rounded-[30px] absolute bottom-3 right-3 flex items-center focus:outline-none border border-whitet"
 
>
Submit
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</button>

)}
</div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
