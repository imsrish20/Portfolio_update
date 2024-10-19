"use client";
import React, { Fragment, useRef, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";

const Project = () => {
  const projectRef = useRef();
  const projectBoxesRef = useRef();
  const linkedInPosts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7233456160303935488?compact=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7223288783314595840?compact=1"
  ];

  useEffect(() => {
    if (projectRef.current) {
      const projectsObserver = new IntersectionObserver(
        ([projectsEntry]) => {
          if (projectsEntry.isIntersecting) {
            projectBoxesRef.current.classList.add("pop-up-child");
          } else {
            projectBoxesRef.current.classList.remove("pop-up-child");
          }
        },
        {
          rootMargin: "-100px",
        }
      );

      projectsObserver.observe(projectRef.current);
    }
  }, [projectRef]);

  return (
    <Fragment>
      <section id='project' ref={projectRef}>
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <CgWebsite /> Projects
        </h2>

        <div
          className='min-h-[400px] pop-down-child pb-[30px] flex flex-wrap px-[20px] gap-8 justify-around items-center shadow-sm shadow-zinc-300 dark:shadow-zinc-700'
          ref={projectBoxesRef}
        >
          {linkedInPosts.map((postUrl, index) => (
            <div className='transition-all duration-700 w-[710px]' key={index}>
              <iframe
                src={postUrl}
                height="399"
                width="710"
                frameBorder="0"
                allowFullScreen
                title={`Embedded post ${index + 1}`}
                className="shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded"
              ></iframe>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Project;
