import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden"
        id="techStack"
        ref={techStackRef}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <FaLaptopCode /> Tech Stack
        </h2>

        <div
          className="pop-down transition-all w-fit duration-500 m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-[#3dc444]" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Advance
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-[#3dc4a5]" : null
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Good
          </button>
          <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-[#3d87c4]" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Familiar
          </button>
        </div>

        <div
          className="pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
          ref={techBoxesRef}
        >
          {sectionData.map((tech, index) => (
            <div
              className="transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center"
              key={tech.name}
              style={{
                boxShadow: `0 0 10px 0 rgba(0, 0, 0, 0.1)`,
                transition: "box-shadow 0.1s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  index % 2 === 0
                    ? "0 0 5px 5px #5f98ed" // Blue glow
                    : "0 0 10px 5px #f08b86"; // Red glow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 10px 0 rgba(0, 0, 0,0.1)";
              }}
            >
              <p>{tech.icon}</p>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
