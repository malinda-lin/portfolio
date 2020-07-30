import {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

import styles from './index.module.css';
import About from '../components/About';
import Projects from '../components/Projects';
import MyLinks from '../components/MyLinks';
import Email from '../components/Email';
import {tasteMakers, hero, aModernFruitStand} from '../public/data/projectData';

function Home() {
  const cover = useRef();
  const header = useRef();
  const about = useRef();
  const projectHeader = useRef();
  const footer = useRef();

  const myProjects = [tasteMakers, hero, aModernFruitStand];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.defaults({overwrite: 'auto'});
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

    gsap.to(about.current, {
      transform: 'translate3d(0px 100px 0px)',
      opacity: 0,
      scrollTrigger: {
        trigger: about.current,
        pin: about.current,
        scrub: true,
        pinSpacing: false,
        end: 'bottom center'
      }
    });

    gsap.fromTo(
      projectHeader.current,
      {
        opacity: 0,
        transform: 'translate3d(0px, 50px, 0px)'
      },
      {
        opacity: 1,
        duration: 2,
        transform: 'translate3d(0px, 0px, 0px)',
        scrollTrigger: {
          trigger: projectHeader.current,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top'
        }
      }
    );

    gsap.fromTo(
      footer.current,
      {
        opacity: 0,
        transform: 'translate3d(0px, 20px, 0px)'
      },
      {
        opacity: 1,
        transform: 'translate3d(0px, 0px, 0px)',
        scrollTrigger: {
          trigger: footer.current,
          start: 'top bottom',
          end: 'bottom 90%',
          scrub: 1
        }
      }
    );
  });

  return (
    <div className={styles.container}>
      <div ref={cover} className={styles.cover} />
      <section id="home" className={styles.section}>
        <h1 ref={header}>Malinda Lin</h1>
      </section>

      <section ref={about} id="about" className={styles.section}>
        <About />
      </section>

      <section
        ref={projectHeader}
        id="projects-header"
        className={styles.section}
      >
        <div>Projects</div>
        <div />
      </section>

      <section className={(styles.section, 'project')}>
        <Projects project={myProjects[0]} />
      </section>

      <section className={(styles.section, 'project')}>
        <Projects project={myProjects[1]} />
      </section>

      <section className={(styles.section, 'project')}>
        <Projects project={myProjects[2]} />
      </section>

      <section id="footer-divider" className={styles.section}>
        <div />
      </section>

      <footer ref={footer}>
        <div id="closing">
          Thank you for visiting my website. This was a lot of fun to put
          together and the techstack I used includes GSAP, React.js, and
          Next.js. If you have any questions, don&apos;t hesitiate to contact
          me. I&apos;d love to help or just connect!
        </div>
        <div id="links">
          <Email />
          <MyLinks />
        </div>
      </footer>
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
          #projects-header {
            font-size: 7vw;
          }
          #projects-header div:nth-child(1) {
            font-family: 'EBGaramond', sans-serif;
            align-self: flex-start;
          }
          #projects-header div:nth-child(2) {
            border-bottom: 1px dotted black;
            height: 1vw;
            width: 100vw;
          }
          .project {
            height: auto;
            margin: 3vh;
          }
          #footer-divider div:nth-child(1) {
            border-bottom: 1px dotted black;
            height: 2em;
            width: 100vw;
          }

          footer {
            padding: 1em;
            margin: 0;
            margin-top: 1em;
            align-self: center;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            font-size: 1.5vw;
          }
          #closing {
            margin: 1vw;
            font-family: 'EBGaramond', sans-serif;
            max-width: 60%;
          }
          #links {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          @media only screen and (max-width: 770px) {
            #about {
              min-height: 100vh;
            }
            footer {
              flex-direction: column;
              font-size: medium;
              margin-top: 1em;
            }
            #closing {
              margin-bottom: 3vw;
              max-width: none;
            }
            #projects-header {
              text-align: center;
              margin-left: 0;
              margin-top: 1em;
            }
            #projects-header div {
              font-family: 'EBGaramond', sans-serif;
            }
            #footer-divider div:nth-child(1) {
              border-bottom: 1px dotted black;
              height: 0;
              width: 100vw;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
