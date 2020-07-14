import {useEffect} from 'react';
import Layout from '../components/layout';

const about = () => {
  const copyText = () => {};

  return (
    <Layout>
      <div id="container">
        <div id="blank-space-container">
          <div id="blank-space">
            <div id="contact">
              <a
                href="https://www.linkedin.com/in/malinda-lin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="profile" src="/images/me.jpg" alt="Selfie" />
              </a>
              <button type="button" onClick={copyText}>
                XQMLIN@GMAIL.COM
              </button>
              <div id="resume-container">
                <a
                  href="/resume/Malinda_Lin_Resume_2020.pdf"
                  className="resume"
                >
                  <button className="resume-links" type="button">
                    Download
                  </button>
                </a>
                |
                <a
                  href="/resume/Malinda_Lin_Resume_2020.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume"
                >
                  <button className="resume-links" type="button">
                    View Resume
                  </button>
                </a>
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
        </div>
        <div className="experience">
          <div className="item">
            <h2>Hi, my name is Malinda.</h2>
            <p>
              I am a software engineer, a fashion designer, and a
              nature/outdoors enthusiast.
            </p>
          </div>
          <div className="item">
            <h2>Programming</h2>
            <p>
              Technologies I use often: Javascript, React, Redux, Node.js,
              Express, Sequelize, SQL Databases, HTML, CSS, Git
            </p>
            <p>
              some paragrph about me some paragrph about me some paragrph about
              me some paragrph about me some paragrph about me some paragrph
              about me some paragrph about me some paragrph about me
            </p>
          </div>
          <div className="item">
            <h2>Art & Design</h2>
            <p>
              I've loved creating and figuring out how things worked since I was
              little. The skills I had included deconstructing and I took those
              skills and chose the path of a fashion designer. My skillset in
              design some paragrph about me some paragrph about me some paragrph
              about me some paragrph about me
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          #container {
            margin: 1em 7em 4em 7em;
            height: 100%;
            width: inherit;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            // border: 1px solid black;
          }
          .experience {
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            // border: 1px solid black;
          }
          .item {
            display: flex;
            flex-direction: column;
            margin: 0.5em;
            padding: 0em 0.5em;
            align-items: flex-start;
          }
          h2 {
            margin: 0.5em 0;
          }
          p {
            text-align: left;
            font-family: 'Quicksand', sans-serif;
            margin: 0.25em 0;
          }
          #blank-space-container {
            width: 100%;
            min-width: 11em;
            position: relative;
            // border: 1px solid black;
          }
          // https://stackoverflow.com/questions/6794000/fixed-position-but-relative-to-container#:~:text=Set%20everything%20up%20as%20you,it%2C%20relative%20to%20the%20container.
          #blank-space {
            position: absolute;
            left: 50%;
          }
          #contact {
            position: fixed;
            transform: translateX(-50%);
            padding-top: 1em;
            height: 300px;
            display: flex;
            flex-direction: column;
            // border: 1px solid black;
            align-items: center;
          }
          .profile {
            margin: 0.5em;
            width: 10em;
            height: 10em;
            border: 1px solid black;
            border-radius: 80%;
          }
          button {
            font-family: 'Quicksand', sans-serif;
            margin: 0.5em;
            padding: 0 0.5em;
            background-color: transparent;
            font-size: 0.75em;
            white-space: nowrap;
            border: none;
            // border: 1px solid black;
          }
          #links {
            display: flex;
          }
          .link {
            margin: 0.5em 0.5em;
            width: 25px;
          }
          #resume-container {
            display: flex;
            align-items: center;
            margin: 0.5em 0.5em;
            align-self: center;
            // border: 1px solid black;
          }
          .resume {
            margin: 0;
            padding: 0;
          }
          .resume-links {
            font-family: 'Quicksand', sans-serif;
            border: none;
            margin: 0.5em;
            padding: 0;
            background-color: transparent;
            font-size: 0.75em;
            white-space: nowrap;
          }
        `}
      </style>
    </Layout>
  );
};

export default about;
