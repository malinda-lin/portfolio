import {useEffect, forwardRef} from 'react';
import gsap from 'gsap';

import {
  defaultString,
  techStack,
  programming,
  design,
  nature
} from '../public/data/aboutData';

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
        return defaultString;
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
            margin-top: 2%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .experience-content {
            margin-top: 1em;
            align-self: flex-end;
            max-width: 70%;
            font-family: 'Quicksand', sans-serif;
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
