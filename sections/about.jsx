"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs"; // Removed BsCircleFill since we won't be using it

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

            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              {/* Location */}
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#f7827c] text-sm">
                    Location
                  </p>
                  <p className="text-[#f7827c]">
                    <ImLocation />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#f7827c] text-xs">
                  Nagpur, Maharashtra, India
                </p>
              </div>

              {/* Age */}
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#f7827c] text-sm">
                    Age
                  </p>
                  <p className="text-[#f7827c]">
                    <IoPerson />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#f7827c] text-xs">
                  20
                </p>
              </div>

              {/* Projects */}
              <div className="w-fit px-5 py-3 mt-4 border-2 border-[#ebaf38] rounded-lg shadow-md bg-[#0b0c0c] flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <p className="text-center md:text-left text-[#f7827c] text-sm">
                    Projects
                  </p>
                  <p className="text-[#f7827c]">
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className="text-center md:text-left text-[#f7827c] text-xs">
                  3
                </p>
              </div>
            </div>

            {/* Updated Text with Custom Bullets */}
            <div className="mt-5 text-justify space-y-4">
              <p className="text-xl font-semibold text-gray-300 mt-6">
                Core Competencies
              </p>
              <ul className="text-gray-300 space-y-3 pl-50 list-none">
                <li className="flex items-start relative pl-4">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#f7827c] text-lg">&#8226;</span>
                  Dedicated to creating dynamic, user-centric web applications.
                </li>
                <li className="flex items-start relative pl-4">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#f7827c] text-lg">&#8226;</span>
                  Integrates data-driven insights for enhanced user experiences.
                </li>
              </ul>

              <p className="text-xl font-semibold text-gray-300 mt-6">
                Professional Aspirations
              </p>
              <ul className="text-gray-300 space-y-3 pl-50 list-none">
                <li className="flex items-start relative pl-4">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#f7827c] text-lg">&#8226;</span>
                  Eager to contribute to a forward-thinking team.
                </li>
                <li className="flex items-start relative pl-4">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#f7827c] text-lg">&#8226;</span>
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
