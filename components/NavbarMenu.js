import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {useRouter} from 'next/router';

const NavbarMenu = ({open, setOpen}) => {
  const router = useRouter();
  const container = useRef();

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
      gsap.to(container.current, {opacity: 1, duration: 1});
      container.current.style.pointerEvents = 'auto';
    } else {
      gsap.to(container.current, {opacity: 0, duration: 1});
      container.current.style.pointerEvents = 'none';
    }
  });

  return (
    <div>
      <div id="container" ref={container}>
        <div id="routes">
          <div className="route-item">
            <button className="route-button" type="button" value="/" onClick={handleClick}>
              Home
            </button>
          </div>

          <div className="route-item">
            <button className="route-button" type="button" value="/projects" onClick={handleClick}>
              Projects
            </button>
          </div>

          <div className="route-item">
            <button className="route-button" type="button" value="/about" onClick={handleClick}>
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

          <div id="links">
            <a
              className="link"
              href="https://www.linkedin.com/in/malinda-lin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin-logo.png" alt="linkedin link" />
            </a>
            <a
              className="link"
              href="https://github.com/malinda-lin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github-logo.svg" alt="Github link" />
            </a>
            <a
              className="link"
              href="https://medium.com/@xqmlin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/medium-logo.png" alt="Medium link" />
            </a>
            <a
              className="link"
              href="https://www.instagram.com/malinda.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram-logo.png" alt="Instagram link" />
            </a>
          </div>
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
            display: flex;
            justify-content: center;
          }
          #routes {
            display: flex;
          }
          .route-item {
            padding: 1em;
            align-self: center;
            margin-bottom: 5em;
          }
          .route-button {
            border: none;
            background-color: transparent;
            font-family: 'Quicksand', sans-serif;
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
            font-family: 'Quicksand', sans-serif;
            margin-bottom: 1em;
          }
          #links {
            display: flex;
          }
          .link {
            margin: 0.5em 0.5em;
            width: 25px;
          }
        `}
      </style>
    </div>
  );
};

export default NavbarMenu;
