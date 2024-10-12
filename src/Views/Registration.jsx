import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bgreg.svg";
import "../index.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    school: '',
    wereMember: '',
    commentLastSeson: '',
    motivation: '',
    addition: '',

  });

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

  const handleNext = () => {
    const currentFieldName = Object.keys(formData)[currentStep];
    if (formData[currentFieldName] === '') {
      setError(`Please fill in the ${currentFieldName.replace(/^\w/, (c) => c.toUpperCase())} field.`);
      return;
    } else {
      setError(null);
    }
    // Skip team name if user does not have a team
    if (currentStep === 5 && formData.hasTeam !== 'yes') {
      setCurrentStep((prev) => prev + 2); // Skip the team name step
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/'); // Back to home page
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('FullName', formData.fullName);
    formDataObj.append('Email', formData.email);
    formDataObj.append('Discord_Id', formData.discord_Id);
    formDataObj.append('School', formData.school);
    formDataObj.append('Year', formData.year);
    formDataObj.append('Has_team', formData.hasTeam);
    if (formData.hasTeam === 'yes') {
      formDataObj.append('TeamName', formData.teamName);
    } else {
      formDataObj.append('TeamName', 'No team');
    }
    formDataObj.append('ML_level', formData.ML_level);
    formDataObj.append('Motivation', formData.motivation);
    
    fetch(
      "...",
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Submission failed");
        }
        return res.text();
      })
      .then((data) => {
        if (data.includes("Success")) {
          navigate("/thank-you");
        } else {
          throw new Error("Unexpected response from server");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Something went wrong. Please try again and make sure to fill all the fields.");
      });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-form bg-cover bg-center text-white"
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
              <label htmlFor="phoneNumber" className="block text-lg font-semibold"> Your phone number </label>
              <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your Discord ID"
                  className="w-full border text-black p-2 rounded-lg mt-2"
                />
            </div>
          )}

          {
            currentStep === 3 && (
              <div>
                <label htmlFor="school" className="block text-lg font-semibold">School</label>
                <select 
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mt-2"
                >
                  <option value="" disabled >Select your school</option>
                  <option value="ENSIA">ENSIA - National higher school of artificial intelligence</option>
                  <option value="ENSM">ENSM - National higher schhol of mathematics</option>
                  <option value="ENSSA">National higher school of autonomous systems</option>
                  <option value="ENSNT">National higher school of nano technologies</option>
                  <option value="ENSCS">National higher school of cyber security</option>
                  <option value="other">other</option>

                </select>

              </div>
            )
          }

          {currentStep === 4 && (
            <div>
              <label htmlFor="year" className="block text-lg font-semibold">Year</label>
              <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mt-2"
                >
                  <option value="" disabled>Select your year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                </select>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <label htmlFor="hasTeam" className="block text-lg font-semibold">Do you have a team?</label>
              <select
                  id="hasTeam"
                  name="hasTeam"
                  value={formData.hasTeam}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-lg mt-2"
                >
                  <option value="" disabled>Select if you have a team</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
            </div>
          )}

          {currentStep === 6 && formData.hasTeam === 'yes' && (
            <div>
              <label htmlFor="teamName" className="block text-lg font-semibold">Team Name</label>
              <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Enter your team name"
                  className="w-full border p-2 rounded-lg mt-2"
              />
            </div>
          )}

          {currentStep === 7 && (
            <div>
              <label htmlFor="ML_level" className="block text-lg font-semibold">Machine Learning Level</label>
              <select
                  id="ML_level"
                  name="ML_level"
                  value={formData.ML_level}
                  onChange={handleChange}
                  className="w-full border text-black p-2 rounded-lg mt-2"
                >
                  <option value="" disabled>Select your ML level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
            </div>
          )}

          {currentStep === 8 && (
            <div>
              <label htmlFor="motivation" className="block text-lg font-semibold">Motivation</label>
              <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Describe your motivation"
                  className="w-full border p-2 rounded-lg mt-2"
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
            {currentStep < 8 && (
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
            {currentStep === 8 && (
              <button type="submit" className="mt-4 bg-[#6208AD] text-white py-2 px-7 rounded-[30px] absolute bottom-3 right-3 focus:outline-white">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default Registration;