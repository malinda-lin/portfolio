import {useEffect, useState} from 'react';
import MyLinks from '../components/MyLinks';

const resume = () => {
  const [load, setLoad] = useState(false);
  const loadFont = async () => {
    const HindBold = new FontFace('HindBold', 'url(fonts/Hind-Bold.ttf)');

    const EBGaramond = new FontFace(
      'EBGaramond',
      'url(fonts/EBGaramond-VariableFont_wght.ttf)'
    );

    await HindBold.load();
    await EBGaramond.load();

    await document.fonts.add(HindBold);
    await document.fonts.add(EBGaramond);

    document.fonts.ready.then(function(fontFaceSet) {
      if (fontFaceSet.status === 'loaded') {
        setLoad(true);
      }
    });
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <div>
      {load ? (
        <div id="container">
          <h1 id="heading">
            <p id="name">Malinda Lin</p>

            <p id="hLine2">
              <span className="">
                <a id="email" href="mailto:XQMLIN@GMAIL.COM">
                  xqmlin@gmail.com
                </a>
              </span>
            </p>

            <p id="hLine3">
              <MyLinks showIG={false} />
            </p>
          </h1>

          <p className="category">Skills</p>

          <p id="tech">
            Node | Javascript | Express | Sequelize | SQL | React | React-Native
            | Redux | Next.js | Socket.io | HTML | CSS
          </p>

          <p className="category">Experience</p>

          <div className="item">
            <div className="categorySubtitle">
              <div>
                <span className="bold">KINS</span>
                <span className="">&nbsp;| </span>
                <span className="italic">FRONT-END ENGINEER </span>
                <span className="">| </span>
                <span className="">PT REMOTE</span>
              </div>
              <span className="date">JUN 2020 - PRESENT</span>
            </div>

            <p className="contentDescription">
              E-commerce website bringing local shops online with emphasis on
              supporting local businesses
            </p>

            <ul className="contentList">
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Designed wireframe and website mockup using Figma
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Responsible for UI &amp; UX, created modals from scratch, used
                for sign up, log in, and log out
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Programmed and optimized React components for navbar and navbar
                drop-down menus
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>Used
                React events and hooks, and used Next.js styling components to
                optimally use CSS
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Contributed to schema design and business model
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="categorySubtitle">
              <div>
                <span className="bold">J.W.E. INC</span>
                <span className="">&nbsp;| </span>
                <span className="italic">ASSISTANT DESIGNER </span>
                <span className="">| NEW YORK, NY</span>
              </div>
              <span className="date">NOV 2015 - JAN 2018</span>
            </div>

            <ul className="contentList">
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Researched and analyzed market trends to match client branding
                in the hospitality and cosmetics industry
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Worked on a team of six to win 80% of major multi-million dollar
                contract bids by delivering finished products from prototype
                stages, and shipping to stores in as little as 3 months compared
                to the industry standard of 6 months
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Created digital illustrations and proof of concepts to help
                clients visualize and collaborate on the final product
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Prepared techpacks(garment blueprint) to communicate garment
                construction to factories
              </li>
            </ul>
          </div>

          <p className="category">Projects</p>

          <div className="item">
            <div className="categorySubtitle">
              <div>
                <span className="bold">TASTEMAKERS</span>
                {' | '}
                <span className="italic">3 PERSON TEAM </span>
                {' | '}
                <a
                  className="link"
                  href="https://github.com/tastemakers-node-feratu/capstone1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/link_icon.png" alt="demo link" />
                </a>
              </div>
            </div>

            <p className="contentDescription">
              Social media mobile application that uses NPM Sentiment library to
              suggest city exploration ideas
            </p>

            <ul className="contentList">
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Established Express server, Sequelize schema, and deployed to
                Heroku as remote server with Node
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Created APIs for logging in, out, or signing up with Sessions,
                Passport, and option of Google OAuth{' '}
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Created APIs allowing users to send and receive friend requests,
                updating database
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Designed App UI and UX with React-Native, React-Hooks,
                Style-Sheets, and Expo
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Technologies used: Express, MYSQL, Sequelize, React-Native,
                React Hooks, Redux, Babel, Sentiment
              </li>
            </ul>
          </div>

          <div className="item">
            <div className="categorySubtitle">
              <div>
                <span className="bold">A MODERN FRUIT STAND</span>
                {' | '}
                <span className="italic">4 PERSON TEAM</span>
                {' | '}
                <a
                  className="link"
                  href="https://modern-fruit-stand.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/link_icon.png" alt="demo link" />
                </a>
              </div>
            </div>

            <p className="contentDescription">
              E-commerce website selling fruits
            </p>

            <ul className="contentList">
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Created product and shopping cart API from back-end to front-end
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Created API for &ldquo;checkout&rdquo; and &ldquo;add to
                cart&rdquo; buttons through Redux Store and Sequelize
              </li>
              <li className="contentLI">
                <span className="plusSign">+&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Technologies used: Node, Express, Postgres, Sequelize, Axios,
                React, Redux, Babel, Webpack
              </li>
            </ul>
          </div>

          <p className="category">Education</p>

          <div className="education">
            <div>
              <span className="bold">FULLSTACK ACADEMY OF CODE</span>
              <span className="">&nbsp;| </span>
              <span className="italic">CERTIFICATE OF COMPLETION</span>
              <span className="">&nbsp; </span>
              <span className="">|</span>
              <span className="">&nbsp;</span>
              <span className="">NEW YORK, NY</span>
              <span className="">&nbsp; </span>
            </div>
            <span className="date">APR 2020</span>
          </div>

          <div className="education">
            <div>
              <span className="bold">FASHION INSTITUTE OF TECHNOLOGY</span>
              <span className="">&nbsp;| </span>
              <span className="italic">BFA FASHION DESIGN </span>
              <span className="">|</span>
              <span className="">&nbsp;NEW YORK, NY </span>
            </div>
            <span className="date">JUN 2015</span>
          </div>
        </div>
      ) : null}
      <style jsx>
        {`
          * {
            font-family: 'EBGaramond';
          }
          a {
            color: #8fbcff;
            text-decoration: none;
            position: relative;
          }
          a:hover {
            opacity: 0.5;
          }
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateY(-50%);
            align-self: center;
            max-width: 35px;
            display: inline-block;
            margin-left: 1vw;
          }
          .bold {
            font-family: 'HindBold';
          }
          .italic {
            font-style: italic;
          }
          #email {
            color: black;
            font-size: 2vw;
          }
          #container {
            align-self: center;
            width: 70%;
            margin: auto;
            padding-bottom: 5vw;
          }
          #heading {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          #name {
            font-family: 'EBGaramond';
            font-weight: 700;
            font-size: 7vw;
          }
          #hLine2 {
            color: black;
            font-size: 2vw;
          }
          #hLine3 {
            align-self: center;
          }
          #tech {
            text-align: center;
            font-size: 1.5vw;
          }
          .item {
            margin 0 4vw;
            margin-bottom: 5vw;
          }
          .category {
            margin: 2vw 0;
            margin-top: 3vw;
            font-size: 3vw;
            font-weight: bold;
          }
          .categorySubtitle {
            margin: 1vw 0;
            display: flex;
            justify-content: space-between;
            font-size: 1.5vw;
          }
          .contentDescription {
            margin: 2vw 0;
            font-size: 1.5vw;
          }
          .contentList {
            list-style-type: circle;
          }
          .contentLI {
            margin: 0.5vw 3vw;
            font-size: 1.5vw;
          }
          .date {
            white-space: nowrap;
            font-size: 1vw;
            color: #5c5c5c;
          }
          .education {
            display: flex;
            justify-content: space-between;
            font-size: 1.5vw;
          }
          .plusSign {
              display: none;
          }
          @media only screen and (max-width: 770px) {

            #container {
              width: 90%;
            }
            #name {
              font-size: xx-large;
            }
            #email {
              font-size: medium;
            }
            #hLine2 {
              font-size: small;
            }
            #tech {
              font-size: small;
            }
            .category {
              font-size: large;
            }
            .categorySubtitle {
              flex-direction: column;
              font-size: small;
            }
            .contentDescription {
              font-size: small;
            }
            .contentLI {
              margin-left: 2vw;
              list-style-type: circle;
              font-size: small;
              margin: 1vw 0;
            }
            .education {
              display: flex;
              flex-direction: column-reverse;
            }
            .education .date {
              align-self: flex-end;
              font-size: small;
            }
            .date {
              font-size: small;
            }
          }
        `}
      </style>
    </div>
  );
};
export default resume;
