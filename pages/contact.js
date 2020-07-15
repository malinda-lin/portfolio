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
        <a href="/resume/Malinda_Lin_Resume_2020.pdf" className="resume">
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
</div>;

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