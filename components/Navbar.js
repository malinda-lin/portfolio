import Link from 'next/link';

const Navbar = () => {

  return (
    <div>
      <div id="container">
        <div className="item">
          <Link href="/">
            <button type="button">Home</button>
          </Link>
        </div>

        <div className="item">
          <Link href="/projects">
            <button type="button">Projects</button>
          </Link>
        </div>

        <div className="item">
          <Link href="/about">
            <button type="button">About</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          #container {
            display: flex;
            justify-content: flex-end;
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

export default Navbar;
