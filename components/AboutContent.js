import {useEffect, forwardRef} from 'react';
import gsap from 'gsap';

import {programming, design, nature} from '../pages/aboutData';

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
        break;
    }
  };

  useEffect(() => {
    gsap.fromTo(
      content.current,
      {opacity: 0, x: 120},
      {opacity: 1, duration: 1, delay: 0.4, x: 0}
    );
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
});

export default AboutContent;
