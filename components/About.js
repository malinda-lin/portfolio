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

  // fades in content
  const easeInMobile = () => {
    gsap.fromTo(
      content.current,
      {
        opacity: 0,
        transform: 'translate3d(0px, 20px, 0px)'
      },
      {
        opacity: 1,
        duration: 1,
        transform: 'translate3d(0px, 0px, 0px)'
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
    document.activeElement.blur();
  };

  // fades out current content and sets new content
  const setContent = e => {
    e.target.focus();
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
              start: 'top+=100 bottom',
              end: '+=100',
              scrub: 1,
              scrollTrigger: 'reset reset reset reset'
            }
          }
        );
      }
      if (showContent) {
        if (content.current.style.left || content.current.style.top) {
          content.current.style.left = 0;
          content.current.style.top = 0;
          content.current.style.transform = 'translateX(0%) translateY(0%)';
        }
      }
    }

    if (!mobile) {
      // how to transition from mobile size with content to !mobile size and disable content
      if (showContent) {
        let h;
        switch (showContent) {
          case '0': {
            h = '12%';
            break;
          }
          case '1': {
            h = '38%';
            break;
          }
          case '2': {
            h = '63%';
            break;
          }
          default: {
            break;
          }
        }
        content.current.style.left = '50%';
        content.current.style.top = h;
        content.current.style.transform = 'translateX(-50%) translateY(-50%)';
      }

      // animate header
      if (initHeader) {
        gsap.fromTo(
          headers.current,
          {opacity: 0.5, transform: 'translate3d(0px, 70px, 0px)'},
          {
            duration: 1.5,
            opacity: 1,
            transform: 'translate3d(0px, -10px, 0px)',
            scrollTrigger: {
              trigger: headers.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              toggleActions: 'restart pause resume reset'
            }
          }
        );
        // animate resume
        gsap.fromTo(
          resume.current,
          {
            opacity: 1
          },
          {
            duration: 1,
            opacity: 0.7,
            scrollTrigger: {
              trigger: resume.current,
              start: 'top bottom',
              end: 'bottom+=50 top',
              scrub: 1,
              toggleActions: 'reset reset reset reset'
            }
          }
        );
        setInitHeader(false);
      }
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
          <button
            className="content-button"
            type="button"
            onClick={setContent}
            onMouseEnter={setContent}
            value="0"
          >
            {`I am a `}
            <span className="button-text">SOFTWARE ENGINEER,</span>
          </button>

          <button
            className="content-button"
            type="button"
            onClick={setContent}
            onMouseEnter={setContent}
            value="1"
          >
            {` a `}
            <span className="button-text">FASHION DESIGNER,</span>
          </button>

          <button
            className="content-button"
            type="button"
            onClick={setContent}
            onMouseEnter={setContent}
            value="2"
          >
            {` a `}
            <span className="button-text">NATURE LOVER,</span>
            {` and more . . .`}
          </button>
        </div>

        <AboutContent selectedContent={showContent} ref={content} />

        <div ref={resume} id="resume-container">
          <a
            href="/resume/Malinda_Lin_Resume_2020.pdf"
            className="resume download"
          >
            <button className="resume-links" type="button">
              Download
            </button>
          </a>
          <span id="link-divider">|</span>
          <a
            href="/resume"
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
            padding-bottom: 10%;
          }
          .experience-buttons {
            align-self: center;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .content-button {
            margin: 2vw;
            background-color: transparent;
            border: none;
            transition-property: opacity;
            transition-duration: 1s;
            font-size: 6vw;
          }
          .button-text {
            font-family: 'EBGaramond', sans-serif;
            font-size: 6vw;
            white-space: nowrap;
            border-bottom: 1px dotted black;
            pointer-events: none;
          }
          .content-button:hover {
            opacity: 0;
          }
          .content-button:active,
          .content-button:focus {
            opacity: 0;
          }
          #resume-container {
            display: flex;
            align-items: center;
            align-self: center;
            margin: 1vw 0;
          }
          .resume {
            margin: 0;
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
              min-height: 90vh;
            }
            #resume-container {
              display: block;
              text-align: left;
              align-self: flex-end;
              padding-right: 1em;
              padding-bottom: 1em;
            }
            .resume {
              margin: 1.5em 0;
            }
            .download {
              display: none;
            }
            #link-divider {
              display: none;
            }
            .resume-links {
              margin 0;
              font-size: large;
            }
            .content-button:hover {
              opacity: 1;
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
