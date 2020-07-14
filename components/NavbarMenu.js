import {useEffect, useRef, useState} from 'react';
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
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  useEffect(() => {
    gsap.to(container.current, {opacity: 1, duration: 1});
  });

  return (
    <div>
      {open ? (
        <div id="container" ref={container}>
          <div className="item">
            <button type="button" value="/" onClick={handleClick}>
              Home
            </button>
          </div>

          <div className="item">
            <button type="button" value="/projects" onClick={handleClick}>
              Projects
            </button>
          </div>

          <div className="item">
            <button type="button" value="/about" onClick={handleClick}>
              About
            </button>
          </div>
        </div>
      ) : null}

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
          .item {
            padding: 1em;
          }
          button {
            border: none;
            background-color: transparent;
            font-size: 1em;
          }
        `}
      </style>
    </div>
  );
};

export default NavbarMenu;
