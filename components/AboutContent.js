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
    <div>
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
            // border: 1px solid black;
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
        `}
      </style>
    </div>
  );
});

export default AboutContent;

// , x, y

// forwardRef( , content );