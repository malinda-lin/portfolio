import {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import styles from './index.module.css';
import NavBar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import {tasteMakers, hero, aModernFruitStand} from '../public/data/projectData';

function Home() {
  const cover = useRef();
  const header = useRef();
  const projectHeader = useRef();
  // const about = useRef();

  const myProjects = [tasteMakers, hero, aModernFruitStand];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(cover.current, 1.5, {
      opacity: 0
    });

    gsap.to(header.current, {
      transform: 'translate3d(0px, 100px, 0px)',
      rotation: 5,
      transformOrigin: 'left bottom',
      opacity: 0,
      scrollTrigger: {
        trigger: header.current,
        scrub: true,
        pin: header.current,
        pinSpacing: false
      }
    });

    gsap.from(projectHeader.current, 1.5, {
      opacity: 0,
      transform: 'translate3d(-200px, 0px, 0px)',
      scrollTrigger: {
        trigger: projectHeader.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'restart pause resume reset'
      }
    });
  });

  return (
    <div className={styles.container}>
      <div ref={cover} className={styles.cover} />
      {/* <NavBar /> */}
      <section id="home" className={styles.section}>
        <h1 ref={header}>Malinda Lin</h1>
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>

      <section
        ref={projectHeader}
        id="projects-header"
        className={styles.section}
      >
        <div>Here are my projects:</div>
      </section>

      <section className={styles.section}>
        <Projects project={myProjects[0]} />
      </section>

      <section className={styles.section}>
        <Projects project={myProjects[1]} />
      </section>

      <section className={styles.section}>
        <Projects project={myProjects[2]} />
      </section>
      <style jsx>
        {`
          #home {
            height: 100vh;
            font-size: 8vw;
          }
          #home h1 {
            margin: auto;
            white-space: nowrap;
            position: relative;
            align-self: center;
            text-align: center;
          }
          #about {
          }
          #projects-header {
            margin-left: 1em;
            font-family: 'EBGaramond', sans-serif;
            font-size: 7vw;
          }
          #projects-header div {
            align-self: flex-start;
            //   font-family: 'EBGaramond', sans-serif;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
