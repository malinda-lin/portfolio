import {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Layout from './Layout';
import AboutContent from './AboutContent';

const about = () => {
  const content = useRef();
  // const project = useRef();
  const headers = useRef();

  const [showContent, setShowContent] = useState(null);
  const [initHeader, setInitHeader] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  const easeOutContent = () => {
    gsap.fromTo(content.current, {opacity: 1, duration: 0.5}, {opacity: 0});
  };

  const easeInContent = e => {
    gsap.fromTo(
      content.current,
      {
        opacity: 0,
        rotation: 5,
        transformOrigin: 'left bottom',
        top: e.clientY,
        left: e.clientX - 100
      },
      {
        opacity: 1,
        rotation: 0,
        duration: 2,
        top: e.clientY,
        left: e.clientX - 100
      }
    );
  };

  const unSetContent = () => {
    easeOutContent();
    setTimeout(() => {
      setShowContent(null);
    }, 500);
  };
  // fades out current content and sets new content
  const setContent = e => {
    e.persist();
    console.log('enter');
    // lower opacity so paragraph is more readable
    gsap.to(headers.current, 1, {opacity: 0.1});

    const target = e.target.value;
    if (showContent !== target) {
      easeOutContent();
      setTimeout(() => {
        setShowContent(target);
        easeInContent(e);
      }, 500);
    }
  };

  useEffect(() => {
    gsap.defaults({overwrite: 'auto'});
    // only animates when component is refreshed
    if (initHeader) {
      gsap.fromTo(
        headers.current,
        {opacity: 0.3, y: 120, x: -80},
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          x: 0,
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
  });

  return (
    <Layout>
      <div id="container">
        <div ref={headers} className="experience-buttons">
          <div className="button-container">
            I am a
            <button
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              onMouseLeave={unSetContent}
              value="0"
            >
              SOFTWARE ENGINEER,
            </button>
          </div>
          <div className="button-container">
            a
            <button
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              onMouseLeave={unSetContent}
              value="1"
            >
              FASHION DESIGNER,
            </button>
          </div>
          <div className="button-container">
            a
            <button
              type="button"
              onClick={setContent}
              onMouseEnter={setContent}
              onMouseLeave={unSetContent}
              value="2"
            >
              NATURE LOVER,
            </button>
            and more . . .
          </div>
        </div>

        <AboutContent selectedContent={showContent} ref={content} />

        <div id="resume-container">
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
            position: relative;
            margin-left: 7em;
            margin-right: 7em;
            height: inherit;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // border: 1px solid black;
          }
          .experience-buttons {
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            margin-top: 5em;
            padding: 0em 0.5em;
            align-items: flex-start;
            // border: 1px solid black;
          }

          .button-container {
            font-size: 6em;
          }
          button {
            font-family: 'Quicksand', sans-serif;
            font-size: xx-large;
            margin: 0.5em;
            padding: 0;
            background-color: transparent;
            font-size: 0.75em;
            white-space: nowrap;
            border: none;
            border-bottom: 1px dotted black;
            // border: 1px solid black;
          }
          #resume-container {
            display: flex;
            align-items: center;
            align-self: center;
            margin-bottom: 5em;
          }
          .resume {
            margin: 0;
            padding: 0;
          }
          .resume-links {
            font-family: 'Quicksand', sans-serif;
            border: none;
            margin: 0.5em;
            padding: 0;
            background-color: transparent;
            font-size: 0.75em;
            white-space: nowrap;
          }
        `}
      </style>
    </Layout>
  );
};

export default about;

//  ref={content} x={x} y={y}
