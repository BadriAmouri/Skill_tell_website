import React, { useState } from "react";

function SkillntellClub() {
  const [expanded, setExpanded] = useState(null); // Default to no section expanded

  const getSectionClass = (section) => {
    if (expanded === null) {
      return "w-[33.33%]"; // All sections have equal width initially
    } else if (expanded === section) {
      return "w-[78%]"; // Expanded section takes 78% of the width
    } else {
      return "w-[12%]"; // Collapsed sections take 12% of the width
    }
  };

  return (
    <main className="flex w-full h-[800px] cursor-pointer items-end"> {/* Set a fixed height here */}
      {/* First section */}
      { expanded === null ? 
      (
        <div 
        onClick={() => setExpanded(1)}
        className="flex overflow-hidden  flex-col leading-none min-w-[240px] rounded-[100px_0px_0px_0px] w-[250px] max-md:text-4xl">
          <div className="flex flex-col pt-[20px] bg-purple-900 rounded-[100px_0px_0px_0px] max-md:text-4xl">
          <h1 className="self-center font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
            S
          </h1>
            <img loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c4e53c86fe6cc7219f8750aed219c5f077a6b85295cbcfcf6538b43e037456?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752" 
            alt="" className="object-contain mt-7 w-full aspect-[0.79]" />
          </div>
        </div>
      ) :
      (
        <section
        className={`flex flex-col overflow-hidden rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out ${getSectionClass(
          1
        )}`}
        onClick={() => setExpanded(1)}
      >
        <div
          className={`flex flex-col ${
            expanded === 1
              ? " pr-20 pb-20 pl-9 bg-purple-800 rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out h-full"
              : " pr-0 pb-0 pl-0 bg-purple-800 rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out h-full"
          } `}
        >
           {expanded === 1 ? (
            <div >
          <h1 className="text-[40px] font-semibold  ml-10 mt-10 text-white ">What is </h1>
          <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
           SNT
          </h1> 
          </div>
           )
          : (
            <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px]  max-md:text-4xl">
            S
           </h1>  
          )}
          {expanded === 1 ? (
           
            
            <p className="mt-5 -mb-8 ml-9 text-xl tracking-wider leading-6 text-white max-md:mb-2.5 max-md:max-w-full overflow-auto">
              Skillntell is a vibrant club created by students of ENSIA, driven
              by a shared passion for artificial intelligence and technology. We
              are a group of forward-thinking individuals committed to learning,
              growing, and making an impact in the AI world. Our members come
              from diverse backgrounds, united by a common goal to explore and
              innovate in the field of AI.
            </p>
            
          ) : (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/553b5b40b186a76399750d4ecc6d438117014452651bdd8ea4d998fdeca9ef1c?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
              alt=""
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </section>
      )
    }
    

      {/* Second section */}
      {expanded === null ? (
        <div 
   
        className="flex overflow-hidden  flex-col leading-none min-w-[240px] rounded-[100px_0px_0px_0px] w-[250px] max-md:text-4xl">
          <div className="flex flex-col  pt-[100px]  bg-amber-500 rounded-[100px_0px_0px_0px] max-md:text-4xl">
          <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
            N
          </h1>
            <img loading="lazy" 
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/553b5b40b186a76399750d4ecc6d438117014452651bdd8ea4d998fdeca9ef1c?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"

            alt=""              className="object-cover w-full h-full aspect-[0.7]"
            />
          </div>
        </div>
      ) :
      ( <section
        className={`flex flex-col overflow-hidden rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out ${getSectionClass(
          2
        )}`}
        onClick={() => setExpanded(2)}
      >
        <div
          className={`flex flex-col ${
            expanded === 2
              ? "pt-[110px] pr-20 pb-40 pl-9"
              : "pt-[120px] pr-0 pb-0 pl-0"
          } bg-amber-500 rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out h-full`}
        >
          {expanded === 2 ? (
          <div >
          <h1 className="text-[40px]  font-semibold  ml-10  text-white ">What is the vision of </h1>
          <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
           SNT
          </h1> 
          </div>
           )
          : (
            <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px]  max-md:text-4xl">
            N
           </h1>  
          )}
          {expanded === 2 ? (
            <p className="mt-5 -mb-8 ml-9 text-xl tracking-wider leading-6 text-white max-md:mb-2.5 max-md:max-w-full overflow-auto">
              Skillntell is a vibrant club created by students of ENSIA, driven
              by a shared passion for artificial intelligence and technology. We
              are a group of forward-thinking individuals committed to learning,
              growing, and making an impact in the AI world. Our members come
              from diverse backgrounds, united by a common goal to explore and
              innovate in the field of AI.
            </p>
          ) : (
        
            <img loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2c4e53c86fe6cc7219f8750aed219c5f077a6b85295cbcfcf6538b43e037456?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752" 

            alt=""              className="object-cover w-full h-full aspect-[0.35]"
            />
          )}
        </div>
      </section>)
      }
     
      { expanded === null ? (
         <div 
         className="flex overflow-hidden flex-col min-w-[240px] rounded-[100px_0px_0px_0px] w-[370px] max-md:text-4xl">
           <div className="flex flex-col pt-[200px] bg-purple-900 rounded-[100px_0px_0px_0px] max-md:pt-24 max-md:text-4xl">
           <h1 className="self-center font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
            T
          </h1>
             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/980f340ee24e3c811a2d8dd673529827e14fd1528104ee4c168bd92035e13586?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752" alt="" className="object-contain w-full aspect-[1.16]" />
           </div>
         </div>
      ) :
      (
        <section
        className={`flex flex-col overflow-hidden rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out ${getSectionClass(
          3
        )}`}
        onClick={() => setExpanded(3)}
      >
        <div
          className={`flex flex-col ${
            expanded === 3
              ? "pt-[220px] pr-20 pb-40 pl-9"
              : "pt-[170px] pr-0 pb-0 pl-0"
          } bg-purple-900 rounded-[100px_0px_0px_0px] transition-all duration-500 ease-in-out h-full`}
        >
           {expanded === 3 ? (
         <div >
         <h1 className="text-[40px]  font-semibold  ml-10  text-white ">Our acheivements </h1>
         <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px] max-md:max-w-full max-md:text-4xl">
          SNT
         </h1> 
         </div>
           )
          : (
            <h1 className="self-start font-black tracking-tighter leading-none text-lime-50 text-[300px]  max-md:text-4xl">
            T
           </h1>  
          )}
          {expanded === 3 ? (
            <p className="mt-5 -mb-8 ml-9 text-xl tracking-wider leading-6 text-white max-md:mb-2.5 max-md:max-w-full overflow-auto">
              Skillntell is a vibrant club created by students of ENSIA, driven
              by a shared passion for artificial intelligence and technology. We
              are a group of forward-thinking individuals committed to learning,
              growing, and making an impact in the AI world. Our members come
              from diverse backgrounds, united by a common goal to explore and
              innovate in the field of AI.
            </p>
          ) : (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/284cc943b076fe6a5f9c6fc85ba8d7b65aaf90b0ef6c5b7d132c9f844efe20e3?placeholderIfAbsent=true&apiKey=0e4114b9236c4c31975105344d580752"
              alt=""
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </section>
      )
      }
      
     
     
    </main>
  );
}

export default SkillntellClub;
