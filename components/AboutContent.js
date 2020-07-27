/* eslint-disable react/prop-types */
import {forwardRef} from 'react';

import {techStack, programming, design, nature} from '../public/data/aboutData';

const AboutContent = forwardRef(({selectedContent}, content) => {
  const selectContent = () => {
    switch (selectedContent) {
      case '0': {
        return programming;
      }
      case '1': {
        return design;
      }
      case '2': {
        return nature;
      }
      default:
        return null;
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div id="container" ref={content}>
        {selectedContent === '0' ? (
          <div className="experience-content">
            <b className="font">Technologies I use often</b>
            {': '}
            {techStack}
          </div>
        ) : null}
        <div className="experience-content">{selectContent()}</div>
      </div>
      <style jsx>
        {`
          #container {
            opacity: 0;
            z-index: 8;
            width: 50%;
            position: fixed;
            pointer-events: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .experience-content {
            margin-top: 0.5em;
            align-self: center;
            font-family: 'EBGaramond', sans-serif;
            text-align: left;
            font-size: large;
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
              font-size: xx-small;
            }
          }
        `}
      </style>
    </div>
  );
});

export default AboutContent;
