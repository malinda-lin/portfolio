import {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import Layout from '../components/Layout';
import AboutContent from '../components/AboutContent';

const about = () => {
  const content = useRef();
  const headers = useRef();

  const [showContent, setShowContent] = useState('0');
  const [animateHeader, setAnimateHeader] = useState(true);

  const setContent = e => {
    const target = e.target.value;
    if (showContent !== target) {
      animateOut();
      setTimeout(() => {
        setShowContent(target);
      }, 200);
    }
  };

  const animateOut = () => {
    gsap.fromTo(content.current, {opacity: 1}, {opacity: 0, duration: 0.2});
  };

  useEffect(() => {
    if (animateHeader) {
      gsap.from(headers.current, {
        opacity: 0,
        y: 100,
        duration: 1
      });
      setAnimateHeader(false);
    }
  });

  return (
    <Layout>
      <div id="container">
        <div ref={headers} className="experience-buttons">
          <div className="button-container">
            I am a
            <button type="button" onClick={setContent} value="0">
              SOFTWARE ENGINEER,
            </button>
          </div>
          <div className="button-container">
            a
            <button type="button" onClick={setContent} value="1">
              FASHION DESIGNER,
            </button>
          </div>
          <div className="button-container">
            a
            <button type="button" onClick={setContent} value="2">
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
            align-self: center;
            margin: 1em 7em 4em 7em;
            height: 100%;
            width: inherit;
            display: flex;
            flex-direction: column;
            justify-content: center;
            // border: 1px solid black;
          }
          .experience-buttons {
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            margin: 1em;
            padding: 0em 0.5em;
            align-items: flex-start;
            // border: 1px solid black;
          }

          .button-container {
            font-size: xx-large;
          }
          button {
            font-family: 'Quicksand', sans-serif;
            font-size: xx-large;
            margin: 0.5em;
            padding: 0 0.5em;
            background-color: transparent;
            font-size: 0.75em;
            white-space: nowrap;
            border: none;
            // border: 1px solid black;
          }
          #resume-container {
            position: fixed;
            bottom: 10%;
            transform: translateX(50%);
            right: 50%;
            display: flex;
            align-items: center;
            align-self: center;
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
