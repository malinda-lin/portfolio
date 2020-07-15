import {useEffect, useRef} from 'react';
import gsap from 'gsap';

import {programming, design, nature} from '../pages/aboutData';

const AboutContent = ({selectedContent}) => {
  const content = useRef();

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
        break;
    }
  };

  useEffect(() => {
    gsap.from(content.current, {
      opacity: 0,
      x: 100,
      delay: 2,
      duration: 2
    });
  });

  return (
    <div>
      <div id="container" ref={content}>
        <div className="experience-content">{selectContent()}</div>
      </div>
      <style jsx>
        {`
          #container {
            margin-top: 1em;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
          }
          .experience-content {
            max-width: 70%;
            margin: 1em 0;
            font-family: 'Quicksand', sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default AboutContent;
