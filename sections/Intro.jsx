"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'; // Correct import

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
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
        profileRef.current.style.transform = 'translateX(0)';
        profileRef.current.style.opacity = '1';
        introRef.current.style.transform = 'translateX(0)';
        introRef.current.style.opacity = '1';
      } else {
        profileRef.current.style.transform = 'translateX(500px)';
        profileRef.current.style.opacity = '0';
        introRef.current.style.transform = 'translateX(-500px)';
        introRef.current.style.opacity = '0';
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>Srish&apos;s Portfolio</title>
      </Head>
      <section id='home'>
        <div
          className='min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            ref={introRef}
            style={{
              transform: 'translateX(-500px)',
              opacity: 0,
              transition: 'transform 0.7s ease-out, opacity 0.7s ease-out'
            }}
          >
            <p className='py-2 text-2xl md:text-4xl font-semibold font-sans'>
              Hi There!
            </p>
            <p className='text-2xl md:text-4xl py-2 font-semibold font-sans'>
              I&apos;m a full stack
              <span style={{ color: '#862cc7', darkColor: '#07d0e5' }}>
                {" "}
                developer <span style={{ color: 'white' }}>|</span>
              </span>
            </p>
            <p className='text-2xl md:text-4xl py-2 font-semibold font-sans flex items-center'>
               I am into&nbsp;  
              <Typewriter
                words={[
                  'Designing',
                  'UI/UX',
                  'Machine Learning',
                  'Web Development',
                  'Open Source',
                  'Mentoring',
                ]}
                loop={Infinity}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
                style={{ fontSize: '2em', marginLeft: '0.5rem' }}
              />
            </p>
            <div className='mt-5 md:mt-10 flex gap-3'>
              <Link
                className='text-white text-xl font-semibold rounded bg-red-400 hover:bg-red-500 px-2 py-1'
                href={"#getInTouch"}
              >
                Hire me
              </Link>
              <Link
                className='text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1'
                href='https://drive.google.com/file/d/1uk-tv12y8PK-WrE4oX2xRtmSy4PUVSsE/view'
                target='_blank'
              >
                Download CV
              </Link>
            </div>
          </div>

          <div
            ref={profileRef}
            style={{
              transform: 'translateX(500px)',
              opacity: 0,
              transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
              width: '180px',
              height: '300px',
              backgroundSize: 'cover',
              backgroundImage: 'url(/images/male.png)',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
              marginTop: '40px'
            }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
