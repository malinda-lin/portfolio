import {useState} from 'react';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <NavbarMenu open={showMenu} setOpen={setShowMenu} />
      <div id="container">
        <button id="menu-button" type="button" onClick={toggleMenu} />
      </div>
      <style jsx>
        {`
          #container {
            display: flex;
            justify-content: flex-end;
          }
          #menu-button {
            z-index: 10;
            margin: 2em;
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
