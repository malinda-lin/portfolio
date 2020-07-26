/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */

import {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

const projects = ({project}) => {
  const component = useRef();
  const name = useRef();
  const links = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(component.current, 1, {
      transform: 'translate3d(100px, 70px, 0px)',
      opacity: 0.5,
      scrollTrigger: {
        trigger: component.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'restart pause resume reverse'
      }
    });
    gsap.from(name.current, 1, {
      transform: 'translate3d(2em, 10px, 0px)',
      opacity: 0.5,
      scrollTrigger: {
        trigger: name.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'restart pause resume reverse'
      }
    });
    gsap.to(links.current, 1, {
      scale: 1.5,
      transform: 'translate3d(-50px, 10px, 5px)',
      scrollTrigger: {
        trigger: links.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    })
  });

  return (
    <div>
      <h2 ref={name}>{project.name}</h2>
      <div ref={component} className="project">
        <img className="gif" src={project.gif} alt={project['gif-alt']} />
        <div id="right-side">
          <p id="description">{project.description}</p>
          <p id="tech">{project.technologies}</p>

          <div ref={links} className="links">
            {project.deployed ? (
              <a
                className="link"
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/link_icon.png" alt="demo link" />
              </a>
            ) : null}
            {project.youtube ? (
              <a
                className="link"
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/youtube-logo.svg" alt="youtube link" />
              </a>
            ) : null}
            <a
              className="link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github-logo.png" alt="github link" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          h2 {
            position: absolute;
            right: 3em;
            font-size: 7vh;
            white-space: nowrap;
            z-index: 9;
          }
          .project {
            opacity: 1;
            height: inherit;
            width: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 4em 8em 4em 8em;
            padding: 1em;
          }
          #right-side {
            height: inherit;
            margin: 1em 0 1em 1em 1em;
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            //text-align: left;
          }

          p {
            font-family: 'EBGaramond', sans-serif;
            white-space: -moz-pre-wrap; /* Firefox */
            white-space: -pre-wrap; /* ancient Opera */
            white-space: -o-pre-wrap; /* newer Opera */
            white-space: pre-wrap; /* Chrome; W3C standard */
            word-wrap: break-word; /* IE */
          }
          #description {
            margin-top: 1em;
            font-size: large;
          }
          #tech {
            margin: 1.5em 0 0.8em 0;
            font-size: small;
          }
          .gif {
            max-height: 450px;
            width: auto;
            height: auto

            margin-left: 1em;
            margin-right: 1em;
            box-shadow: 2px 3px 4px black;
          }
          .links {
            align-self: flex-end;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          .link {
            margin: 0.5em;
            width: 35px;
          }
        `}
      </style>
    </div>
  );
};

export default projects;
