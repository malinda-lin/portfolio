/* eslint-disable no-use-before-define */
import {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import AboutContent from './AboutContent';

const about = () => {
  const content = useRef();
  const headers = useRef();
  const resume = useRef();

  const [mobile, setMobile] = useState(false);
  const [showContent, setShowContent] = useState(null);
  const [initHeader, setInitHeader] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  // fade content away
  const easeOutContent = () => {
    gsap.fromTo(content.current, {opacity: 1, duration: 0.25}, {opacity: 0});
  };

  // fades in content w/ slight rotation
  const easeInContent = e => {
    let x = e.clientX;
    const y = e.clientY;
    // keeps the content inside the window, prevents overflow
    if (content.current && x > window.innerWidth / 2) {
      x = window.innerWidth - content.current.offsetWidth - 100;
    }
    gsap.fromTo(
      content.current,
      {
        opacity: 0,
        rotation: 1,
        transformOrigin: '50% 50%',
        // position = fixed, top left for viewport
        top: y - 10,
        left: x - 90
      },
      {
        opacity: 1,
        rotation: 0,
        duration: 1,
        top: y,
        left: x - 100
      }
    );
  };

  // fades in content
  const easeInMobile = () => {
    gsap.fromTo(
      content.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1
      }
    );
  };

  // fade content away and set null if !mobile
  const unSetContent = () => {
    easeOutContent();
    if (!mobile) {
      setTimeout(() => {
        setShowContent(null);
      }, 500);
    }
  };

  // fades out current content and sets new content
  const setContent = e => {
    checkMobile();
    e.persist();
    // lower header opacity so paragraph is more readable
    if (!mobile) {
      gsap.to(headers.current, 1, {opacity: 0.1});
    }

    const target = e.target.value;
    easeOutContent();
    setTimeout(() => {
      setShowContent(target);
      if (mobile) {
        easeInMobile();
      } else {
        easeInContent(e);
      }
    }, 500);
  };

  // sets mobile to true or false
  const checkMobile = () => {
    if (window.innerWidth <= 770) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkMobile);
    checkMobile();

    gsap.defaults({overwrite: 'auto'});

    if (mobile) {
      // animate content if user opened on mobile size(only triggers once)
      if (showContent === null) {
        setShowContent('0');
        gsap.fromTo(
          content.current,
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: content.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }
      //animate content !mobile to mobile
      if (content.current.style.left || content.current.style.top) {
        console.log('hello??')
        content.current.style.left = null;
        content.current.style.top = null;
      }
    }

    if (!mobile) {
      // animate header
      if (initHeader) {
        gsap.fromTo(
          headers.current,
          {opacity: 0.5, transform: 'translate3d(-50px, 120px, 0px)'},
          {
            duration: 1.5,
            opacity: 1,
            transform: 'translate3d(30px, 0px, 0px)',
            scrollTrigger: {
              trigger: headers.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              toggleActions: 'restart pause resume reset'
            }
          }
        );
        setInitHeader(false);
      }

      // animate resume
      gsap.fromTo(
        resume.current,
        {
          opacity: 0.5,
          scale: 1,
          skewX: '20deg'
        },
        {
          duration: 1,
          opacity: 1,
          scale: '1.3',
          skewX: '-10deg',
          scrollTrigger: {
            trigger: resume.current,
            start: 'top+=10 bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    }
  });

  return (
    <div>
      <div id="container">
        <div
          ref={headers}
          className="experience-buttons"
          onMouseLeave={unSetContent}
        >
          <div className="button-container">
            I am a
            <button
              className="content-button"
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              value="0"
            >
              SOFTWARE ENGINEER,
            </button>
          </div>
          <div className="button-container">
            a
            <button
              className="content-button"
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              value="1"
            >
              FASHION DESIGNER,
            </button>
          </div>
          <div className="button-container">
            a
            <button
              className="content-button"
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              value="2"
            >
              NATURE LOVER,
            </button>
            and more . . .
          </div>
        </div>

        <AboutContent selectedContent={showContent} ref={content} />

        <div ref={resume} id="resume-container">
          <a href="/resume/Malinda_Lin_Resume_2020.pdf" className="resume">
            <button className="resume-links" type="button">
              Download
            </button>
          </a>
          |
          <a
            href="/resume/Malinda_Lin_Resume_2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            <button className="resume-links" type="button">
              View Resume
            </button>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          #container {
            margin: auto;
            align-self: center;
            position: relative;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .experience-buttons {
            align-self: center;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .button-container {
            font-size: 6vw;
            color: gray;
          }
          button {
            font-family: 'EBGaramond', sans-serif;
            font-size: 7vw;
            margin: 0.5em;
            background-color: transparent;
            white-space: nowrap;
            border: none;
            border-bottom: 1px dotted black;
            transition-property: opacity;
            transition-duration: 1s;
          }
          .content-button:hover {
            opacity: 0.1;
          }
          #resume-container {
            display: flex;
            align-items: center;
            align-self: center;
            margin: 3em 0;
          }
          .resume {
            margin: 2em 0;
            padding: 0;
          }
          .resume-links {
            font-family: 'EBGaramond', sans-serif;
            border: none;
            margin: 0.5em;
            padding: 0;
            background-color: transparent;
            font-size: 2vw;
            white-space: nowrap;
            border-bottom: 1px dotted gray;
          }
          @media only screen and (max-width: 770px) {
            #container {
            }
            #resume-container {
              margin: 0;
            }
            .resume-links {
              font-size: large;
            }
            .content-button:hover {
              opacity: 1;
              border-bottom: 1px solid black;
              font-weight: bold;
            }
            button {
              font-size: 6vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default about;
