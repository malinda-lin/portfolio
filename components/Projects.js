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
    if (window.innerWidth > 770) {
      gsap.from(component.current, 1, {
        opacity: 0.5,
        transform: 'translate3d(0px, 120px, 0px)',
        scrollTrigger: {
          trigger: component.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'restart pause resume reverse'
        }
      });
      gsap.from(name.current, 1, {
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
        scrollTrigger: {
          trigger: links.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  });

  return (
    <div>
      <div ref={component} className="project">
        <img className="gif" src={project.gif} alt={project['gif-alt']} />
        <div id="right-side">
          <h2 ref={name}>{project.name}</h2>
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
            font-size: 3.5vw;
            white-space: nowrap;
            z-index: 9;
            text-align: center;
            margin-bottom: 1em;
          }
          .project {
            margin: 3vw 0;
            width: 100%;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          #right-side {
            min-width: 46%;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0;
            margin-left: 2em;
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
            font-size: 2vw;
          }
          #tech {
            margin: 1.5em 0 0.8em 0;
            font-size: 1.5vw;
          }
          .gif {
            max-height: 700px;
            max-width: 50%;
            height: auto;
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
          @media only screen and (max-width: 770px) {
            h2 {
              right: auto;
              display: block;
              font-size: x-large;
              white-space: nowrap;
              width: 100%;
              text-align: center;
              margin-bottom: 0.5em;
            }
            .project {
              flex-direction: column;
              margin: 0;
              height: auto;
              align-items: center;
            }
            #description {
              font-size: large;
            }
            #right-side {
              margin-top: 1em;
              margin-left: 0;
            }
            #tech {
              font-size: small;
            }
            .gif {
              margin-top: 1em;
              max-width: 100vw;
              align-self: center;
            }
            .links {
              align-self: center;
              justify-content: center;
              align-items: center;
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
};

export default projects;
