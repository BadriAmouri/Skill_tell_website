import React from "react";
import SkillntellClub from "../Components/About_us_Content";
import { motion } from "framer-motion";

function AboutUs() {
    const fadeIn = (direction, delay) => {
        return {
          hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0
          },
          show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
              type: 'tween',
              duration: 1.2,
              delay: delay,
              ease: [0.25, 0.25, 0.25, 0.75],
            },
          },
        };
      };

    return (
       
            <main 
            className="overflow-hidden font-abc pt-40 pl-20  bg-black max-md:pt-24 max-md:pl-5"
            >
                 <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
        >
            <div className="flex gap-0  max-md:flex-col">
                <section className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-7xl font-bold text-white leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                About us
              </h1>
                        <p className="self-stretch mt-4 text-xl tracking-wider leading-6 text-white max-md:max-w-full">
                            Dive into Skillntell and explore how we're shaping the next generation of artificial intelligence innovators. Discover the community that's turning ideas into reality at ENSIA!
                        </p>
                       
                        <button className="px-1 sm:py-2  sm:px-8 sm:mt-20 max-w-full text-xl sm:text-3xl font-bold text-purple-800 uppercase bg-lime-50 leading-[56px] rounded-[62px] w-[380px] max-md:px-5 max-md:mt-10">
                            JOIN NOW
                        </button>
                    </div>
                </section>
                <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                    <SkillntellClub />
                </div>
            </div>
            </motion.div>
            </main>
        
    );
}

export default AboutUs;


