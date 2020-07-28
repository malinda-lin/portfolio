/* eslint-disable react/prop-types */
import {forwardRef, useState} from 'react';

import {techStack, programming, design, nature} from '../public/data/aboutData';

const AboutContent = forwardRef(({selectedContent}, content) => {
  // h is the css top value
  let h = '10%';

  let resultContent = null;
  const setH = () => {
    switch (selectedContent) {
      case '0': {
        h = '12%';
        resultContent = programming;
        break;
      }
      case '1': {
        h = '38%';
        resultContent = design;
        break;
      }
      case '2': {
        h = '63%';
        resultContent = nature;
        break;
      }
      default: {
        resultContent = null;
        break;
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {setH()}
      <div id="container" ref={content}>
        {selectedContent === '0' ? (
          <div id="tech">
            <b className="font">Technologies I use often</b>
            {': '}
            {techStack}
          </div>
        ) : null}
        <div className="experience-content">{resultContent}</div>
      </div>
      <style jsx>
        {`
          #container {
            opacity: 0;
            z-index: 8;
            width: 80%;
            position: absolute;
            margin: auto;
            top: ${h};
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            pointer-events: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .experience-content {
            font-family: 'EBGaramond', sans-serif;
            text-align: center;
            font-size: 2vw;
          }
          #tech {
            margin-bottom: 0.5vw;
            align-self: center;
            font-family: 'EBGaramond', sans-serif;
            text-align: center;
            font-size: 1.5vw;
          }
          .font {
            font-family: 'EBGaramond', sans-serif;
            border-bottom: 1px dotted black;
          }
          @media only screen and (max-width: 770px) {
            #container {
              margin-top: 2vh;
              justify-content: center;
              align-content: center;
              align-self: center;
              position: relative;
              width: 85%;
            }
            .experience-content {
              font-size: large;
            }
          }
        `}
      </style>
    </div>
  );
});

export default AboutContent;
