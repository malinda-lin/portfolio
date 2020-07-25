/* eslint-disable jsx-a11y/control-has-associated-label */
import {useState} from 'react';
import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div>
      <NavbarMenu open={showMenu} setOpen={setShowMenu} />
      <div id="container">
        <button id="menu-button" type="button" onClick={toggleMenu} />
      </div>
      <style jsx>
        {`
          #container {
            position: fixed;
            display: flex;
            justify-content: flex-end;
          }
          #menu-button {
            z-index: 10;
            margin: 3em;
            height: 0.7em;
            width: 2em;
            border-top: 0.15em solid black;
            border-bottom: 0.15em solid black;
            border-left: 0 solid transparent;
            border-right: 0 solid transparent;
            border-radius: 10%;
            background-color: transparent;
          }
          #menu-button:hover {
            border-color: lightgray;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
