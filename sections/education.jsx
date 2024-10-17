"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";
import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="education"
        ref={educationRef}
        // style={{
        //   backgroundImage: `url('/edubg.png')`, // Add the path to your PNG
          
        //  // Ensures the image covers the section
        //   backgroundPosition: 'center', // Centers the image
        //   backgroundRepeat: 'no-repeat' // Ensures no repetition of the background image
        // }}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <IoSchoolSharp /> Education
        </h2>

        <div
          className="pop-down-child pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[50px]"
          ref={educationBoxesRef}
        >
          {EducationData.map((education, index) => (
            <div
              className={`transition-all duration-700 border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded p-6 w-[450px] h-[300px] flex flex-col items-center justify-center gap-6 ${
                index % 2 === 0 ? "self-start" : "self-end"
              }`}
              key={index}
              style={{
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease-in-out"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  index % 2 === 0
                    ? "0 0 5px 5px #5f98ed" // Blue glow for even index
                    : "0 0 10px 5px #f08b86"; // Red glow for odd index
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 10px 0 rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Education image - changed to rectangular */}
              <Image
                alt={education.name}
                className="w-[450px] h-[150px] object-cover" // Adjusted to rectangular dimensions
                height={150}
                src={education.image}
                width={450}
              />

              {/* Education content */}
              <div className="flex flex-col gap-2 text-center">
                <p className="text-xl font-bold" style={{ color: "#5f98ed" }}>
                  {education.name}
                </p>
                <p style={{ color: "#f08b86" }}>{education.schoolOrCollege}</p>
                <p style={{ color: "#f08b86" }}>
                  {education.fromTo} &nbsp; | &nbsp;{" "}
                  {education.statusOrPrecentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
