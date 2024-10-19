"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    expeObserver.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <section id="experience" ref={expeRef} className="flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
            <MdWork /> Experience
          </h2>

          <div
            className="pop-down-child pb-[30px] px-[20px] shadow-sm shadow-zinc-300 dark:shadow-zinc-700"
            ref={expeBoxesRef}
          >
            {ExperienceData.map((experience, index) =>
              experience.side === "left" ? (
                <div
                  className={`md:flex gap-2 items-end transition-all duration-500 ${
                    index !== 0 ? "mt-7" : ""
                  }`}
                  key={experience.companyName}
                >
                  <div className="md:w-[100%] max-w-[1000px] p-4 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm rounded">
                    <div className="flex justify-between gap-2">
                      <p className="text-xl md:text-2xl font-bold text-blue-500">
                        {experience.companyName}
                      </p>
                      <p className="flex gap-2 items-center" style={{ color: '#f08b86' }}>
                        <ImLocation /> {experience.location}
                      </p>
                    </div>

                    <div className="flex justify-between text-gray-600 dark:text-gray-400 gap-2 mt-2">
                      <p className="font-semibold">{experience.role}</p>
                      <p>{experience.fromTo}</p>
                    </div>

                    <p className="mt-2 text-justify text-gray-700 dark:text-gray-500">
                      <ul className="list-disc pl-5">
                        {Array.isArray(experience.description)
                          ? experience.description.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))
                          : experience.description.split("\n").map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                      </ul>
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="md:flex justify-end items-end mt-7 gap-2 transition-all duration-500"
                  key={experience.companyName}
                >
                  <div className="md:w-[45%] max-w-[600px] p-4 border border-zinc-300 dark:border-zinc-700 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm rounded">
                    <div className="flex justify-between gap-2">
                      <p className="text-xl md:text-2xl font-bold text-blue-500">
                        {experience.companyName}
                      </p>
                      <p className="flex gap-2 items-center" style={{ color: '#f08b86' }}>
                        <ImLocation /> {experience.location}
                      </p>
                    </div>

                    <div className="flex justify-between text-gray-600 dark:text-gray-400 mt-2 gap-2">
                      <p className="font-semibold">{experience.role}</p>
                      <p>{experience.fromTo}</p>
                    </div>
                    <p className="mt-2 text-justify text-gray-700 dark:text-gray-500">
                      <ul className="list-disc pl-5">
                        {Array.isArray(experience.description)
                          ? experience.description.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))
                          : experience.description.split("\n").map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                      </ul>
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Video Frame Section */}
          
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
