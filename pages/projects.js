/* eslint-disable jsx-a11y/control-has-associated-label */
import {useState, useRef, useEffect} from 'react';
import gsap from 'gsap';
import Layout from '../components/Layout';
import {tasteMakers, hero, aModernFruitStand} from './projectData';

// TODO: add arrowkey functionality to display next project

const projects = () => {
  const myProjects = [tasteMakers, hero, aModernFruitStand];
  const [currentProject, setCurrentProject] = useState(0);
  const project = useRef();
  const firstCircle = useRef();
  const secondCircle = useRef();
  const thirdCircle = useRef();
  const refArray = [firstCircle, secondCircle, thirdCircle];

  const circleClick = e => {
    const target = e.target.value;
    animateOut();
    setTimeout(() => {
      setCurrentProject(Number(target));
    }, 500);
  };

  const nextClick = reverse => {
    animateOut();
    setTimeout(() => {
      if (reverse) {
        if (currentProject !== 0) {
          setCurrentProject(currentProject - 1);
        } else {
          setCurrentProject(myProjects.length - 1);
        }
        return;
      }
      if (currentProject !== myProjects.length - 1) {
        setCurrentProject(currentProject + 1);
      } else {
        setCurrentProject(0);
      }
    }, 500);
  };

  const setCircle = () => {
    for (let i = 0; i < refArray.length; i += 1) {
      if (currentProject === i) {
        refArray[currentProject].current.style.backgroundColor = 'black';
      } else {
        refArray[i].current.style.backgroundColor = 'transparent';
      }
    }
  };

  const animateIn = () => {
    gsap.to(project.current, {
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    });
  };

  const animateOut = () => {
    gsap.to(project.current, {
      opacity: 0.1,
      duration: 1,
      ease: 'power3.out'
    });
  };

  useEffect(() => {
    animateIn();
    setCircle();
  });

  return (
    <Layout>
      <div>
        <div className="project" ref={project}>
          <img
            className="gif"
            src={myProjects[currentProject].gif}
            alt={myProjects[currentProject]['gif-alt']}
          />
          <div id="right-side">
            <h2>{myProjects[currentProject].name}</h2>
            <p id="description">{myProjects[currentProject].description}</p>
            <p id="tech">{myProjects[currentProject].technologies}</p>

            <div className="links">
              {myProjects[currentProject].deployed ? (
                <a
                  className="link"
                  href={myProjects[currentProject].deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/link_icon.png" alt="demo link" />
                </a>
              ) : null}
              {myProjects[currentProject].youtube ? (
                <a
                  className="link"
                  href={myProjects[currentProject].youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/youtube-logo.svg" alt="youtube link" />
                </a>
              ) : null}
              <a
                className="link"
                href={myProjects[currentProject].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/github-logo.png" alt="github link" />
              </a>
            </div>
          </div>
        </div>
        <div id="next-container">
          <button
            className="next-button"
            type="button"
            onClick={() => {
              nextClick(1);
            }}
          >
            {'<<'}
          </button>
          <button
            className="circle-button"
            type="button"
            value="0"
            ref={firstCircle}
            onClick={circleClick}
          />
          <button
            className="circle-button"
            type="button"
            value="1"
            ref={secondCircle}
            onClick={circleClick}
          />
          <button
            className="circle-button"
            type="button"
            value="2"
            ref={thirdCircle}
            onClick={circleClick}
          />
          <button
            className="next-button"
            type="button"
            onClick={() => {
              nextClick(0);
            }}
          >
            {'>>'}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .project {
            opacity: 0.1;
            height: 450px;
            width: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 4em 8em 4em 8em;
            padding: 1em;
          }
          #right-side {
            height: inherit;
            margin: 1em;
            padding-left: 1em;
            padding-right: 1em;
            display: flex;
            flex-direction: column;
          }
          h2 {
            margin: 0.4em 0;
            font-size: xx-large;
            white-space: nowrap;
          }
          p {
            font-family: 'Quicksand', sans-serif;
            white-space: -moz-pre-wrap; /* Firefox */
            white-space: -pre-wrap; /* ancient Opera */
            white-space: -o-pre-wrap; /* newer Opera */
            white-space: pre-wrap; /* Chrome; W3C standard */
            word-wrap: break-word; /* IE */
          }
          #tech {
            font-size: smaller;
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
            width: 30px;
          }
          #next-container {
            width: 8em;
            height: 2em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            bottom: 10%;
            right: 50%;
            transform: translateX(50%);
          }
          .circle-button {
            width: 1em;
            height: 1em;
            margin: 0 0.5em;
            border: 1px solid black;
            border-radius: 50%;
            background-color: transparent;
          }
          .circle-button:hover {
            border-color: lightgray;
          }
          .next-button {
            align-self: center;
            border: none;
            background-color: transparent;
            font-size: large;
          }
        `}
      </style>
    </Layout>
  );
};

export default projects;
