"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";
import { SiCodechef, SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        if (profileRef.current) {
          profileRef.current.style.transform = "translateX(0)";
          profileRef.current.style.opacity = "1";
        }
        if (introRef.current) {
          introRef.current.style.transform = "translateX(0)";
          introRef.current.style.opacity = "1";
        }
        if (linksRef.current) {
          linksRef.current.style.transform = "translateX(0)";
          linksRef.current.style.opacity = "1";
        }
      } else {
        if (profileRef.current) {
          profileRef.current.style.transform = "translateX(500px)";
          profileRef.current.style.opacity = "0";
        }
        if (introRef.current) {
          introRef.current.style.transform = "translateX(-500px)";
          introRef.current.style.opacity = "0";
        }
        if (linksRef.current) {
          linksRef.current.style.transform = "translateX(500px)";
          linksRef.current.style.opacity = "0";
        }
      }
    }
  }, [homeRef, isHome]);

  const handleToggle = () => {
    setShowLinks(!showLinks); // Toggle the visibility of the links
  };

  return (
    <Fragment>
      <Head>
        <title>Srish&apos;s Portfolio</title>
      </Head>
      <section id="home" className="relative">
        <video
          src="bg.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            ref={introRef}
            style={{
              transform: "translateX(-500px)",
              opacity: 0,
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
            }}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Hi There!
            </p>
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans">
              <LinearGradient gradient={["to right", "#ffffff,#f08c86"]}>
                I&apos;m a full stack
              </LinearGradient>
              <span style={{ color: "#f7827c", darkColor: "#f7827c" }}>
                {" "}
                developer <span style={{ color: "white" }}></span>
              </span>
            </p>
            <p className="text-2xl md:text-4xl py-2 font-semibold font-sans flex items-center">
              I am into&nbsp;
              <LinearGradient gradient={["to right", "#f9f7fa,#7aa7eb ,#7aa7eb"]}>
                <Typewriter
                  words={[
                    "Designing",
                    "UI/UX",
                    "Machine Learning",
                    "Web Development",
                    "Open Source",
                    "Mentoring",
                  ]}
                  loop
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  style={{ fontSize: "2em", marginLeft: "0.5rem" }}
                />
              </LinearGradient>
            </p>
            <div className="mt-5 md:mt-10 flex gap-3">
              <Link
                className="text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1"
                href={"#getInTouch"}
              >
                Hire me
              </Link>
              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1"
                href="https://drive.google.com/file/d/1uk-tv12y8PK-WrE4oX2xRtmSy4PUVSsE/view"
                target="_blank"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div
            ref={profileRef}
            style={{
              transform: "translateX(500px)",
              opacity: 0,
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
              width: "100%",
              maxWidth: "400px",
              height: "100%",
              maxHeight: "500px",
              backgroundSize: "contain",
              backgroundImage: "url(/images/me.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "auto",
              marginTop: "100px",
            }}
          />
        </div>

        {/* Toggle Button and Links */}
<div className="absolute right-10 bottom-10 flex flex-col items-center gap-4">
  {/* Circular toggle button */}
  <button
    onClick={handleToggle}
    className="w-12 h-12 rounded-full bg-[#f7827c] text-white flex items-center justify-center focus:outline-none"
  >
    {showLinks ? <FaChevronUp /> : <FaChevronDown />}
  </button>

  {/* Links container that expands/collapses */}
  <div
    className={`overflow-hidden transition-all duration-700 ${
      showLinks ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
    }`}
    style={{ transition: "opacity 0.7s ease, max-height 0.7s ease" }}
    ref={linksRef}
  >
    <p className="mb-2 flex items-center gap-2">
      <SiLeetcode className="text-white text-2xl" />
      <Link
        href="https://leetcode.com/u/imsrish/"
        target="_blank"
        className="text-white hover:no-underline text-sm"
      >
        LeetCode
      </Link>
    </p>
    <p className="mb-2 flex items-center gap-2">
      <SiHackerrank className="text-white text-2xl" />
      <Link
        href="https://www.hackerrank.com/profile/imsrish04"
        target="_blank"
        className="text-white hover:no-underline text-sm"
      >
        HackerRank
      </Link>
    </p>
    <p className="flex items-center gap-2">
      <SiCodechef className="text-white text-2xl" />
      <Link
        href="https://www.codechef.com/users/sugar_plump"
        target="_blank"
        className="text-white hover:no-underline text-sm"
      >
        CodeChef
      </Link>
    </p>
  </div>
</div>

      </section>
    </Fragment>
  );
};

export default Intro;
