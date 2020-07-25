/* eslint-disable react/prop-types */
import {useEffect, forwardRef, useState, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import {techStack, programming, design, nature} from '../public/data/aboutData';

const AboutContent = forwardRef(({selectedContent}, content) => {

  // const content = useRef();
  // const [x, setX] = useState(null);
  // const [y, setY] = useState(null);

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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {});

  return (
    <div>
      <div id="container" ref={content}>
        {selectedContent === '0' ? (
          <div className="experience-content">
            <em className="font">Technologies I use often</em>
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
            height: 30%;
            width: 50%;
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .experience-content {
            margin-top: 0.5em;
            align-self: center;
            font-family: 'Quicksand', sans-serif;
            text-align: left;
            font-size: large;
          }
          .font {
            font-family: 'Quicksand', sans-serif;
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