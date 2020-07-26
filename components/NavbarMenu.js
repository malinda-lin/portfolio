/* eslint-disable react/prop-types */
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useRouter} from 'next/router';
import MyLinks from './MyLinks';

const NavbarMenu = ({open, setOpen}) => {
  const router = useRouter();
  const container = useRef();
  const routes = useRef();

  const handleClick = e => {
    e.preventDefault();
    gsap.to(container.current, {opacity: 0, duration: 1});
    if (router.pathname !== e.target.value) {
      router.push(e.target.value);
    } else {
      setOpen(false);
    }
  };

  const copyText = () => {};

  useEffect(() => {
    if (open) {
      gsap.to(container.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.out'
      });
      gsap.to(routes.current, {duration: 2, y: '-10%'});
      container.current.style.pointerEvents = 'auto';
    } else {
      gsap.to(container.current, {opacity: 0, duration: 0.5});
      gsap.to(routes.current, {duration: 1, y: '10%'});
      container.current.style.pointerEvents = 'none';
    }
  });

  return (
    <div>
      <div id="container" ref={container}>
        <div id="routes" ref={routes}>
          <div className="route-item">
            <button
              className="route-button"
              type="button"
              value="/"
              onClick={handleClick}
            >
              Home
            </button>
          </div>
          <div className="route-item">
            <button
              className="route-button"
              type="button"
              value="/projects"
              onClick={handleClick}
            >
              Projects
            </button>
          </div>

          <div className="route-item">
            <button
              className="route-button"
              type="button"
              value="/about"
              onClick={handleClick}
            >
              About
            </button>
          </div>
        </div>
        <div id="contact">
          <div>
            <button id="email" type="button" onClick={copyText}>
              XQMLIN@GMAIL.COM
            </button>
          </div>

          <MyLinks />
        </div>
      </div>

      <style jsx>
        {`
          #container {
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: 9;
          }
          #routes {
            display: flex;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
          }
          .route-item {
            padding: 1em;
            align-self: center;
            margin-bottom: 5em;
          }
          .route-button {
            border: none;
            background-color: transparent;

            font-size: xx-large;
          }
          #contact {
            position: fixed;
            bottom: 10%;
            right: 50%;
            transform: translateX(50%);
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #email {
            border: none;
            background-color: transparent;
            font-family: 'EBGaramond', sans-serif;
            margin-bottom: 1em;
          }
        `}
      </style>
    </div>
  );
};

export default NavbarMenu;
