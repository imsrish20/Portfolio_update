"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill, BsCircleFill } from "react-icons/bs"; // For bullet points

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className="bg-[#050d2e] shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden"
        id="about"
        ref={aboutRef}
      >
        <h2 className="text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3 text-white">
          <FaUserCheck /> Know me ?
        </h2>
        <div className="pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]">
          {/* Person Image */}
          <Image
            alt="about image"
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src="/images/me.jpg"
            width={350}
          />
          <div
            className="text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded"
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className="text-3xl text-center md:text-left font-semibold text-[#5f98ed]">
              Srishti Mangalam
            </p>
            {/* Profile Name */}
            <p className="text-center md:text-left text-[#f08b86] mt-1">
              Full stack web developer & Data Analyst
            </p>
            <p className="text-center md:text-left text-[#5f98ed] mt-1 text-[12px] md:text-[14px] lg:text-[14px]">
              B-Tech in Computer Science and Engineering specialized in Data
              Science
            </p>

            {/* Location, Age, Projects */}
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#5f98ed] text-sm">
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#f08b86] text-xs">
                  Nagpur, Maharashtra, India
                </p>
              </div>
              {/* Age */}
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#f08b86] text-sm">
                    Age
                  </p>
                  <p>
                    <IoPerson />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#5f98ed] text-xs">
                  20
                </p>
              </div>
              {/* Projects */}
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#5f98ed] text-sm">
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#f08b86] text-xs">
                  3
                </p>
              </div>
            </div>

            {/* Updated Text with Spacing and Correct Bullet Sizes */}
            <div className="mt-5 text-justify space-y-4">
              <p className="text-xl font-semibold text-gray-300 mt-6">
                Core Competencies
              </p>
              <ul className="text-gray-300 space-y-3 pl-6">
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#5f98ed] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Dedicated to creating dynamic, user-centric web applications.
                </li>
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#f08b86] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Integrates data-driven insights for enhanced user experiences.
                </li>
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#f08b86] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Expertise in frontend frameworks, modern UI/UX design, and
                  responsive development.
                </li>
              </ul>

              <p className="text-xl font-semibold text-gray-300 mt-6">
                Professional Aspirations
              </p>
              <ul className="text-gray-300 space-y-3 pl-6">
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#5f98ed] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Eager to contribute to a forward-thinking team.
                </li>
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#f08b86] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Committed to continuous learning and growth in web development
                  and data science.
                </li>
                <li className="flex items-start">
                  <BsCircleFill
                    className="text-[#5f98ed] mr-3"
                    style={{ fontSize: "0.75rem" }}
                  />{" "}
                  Aims to leverage both fields to deliver innovative solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
