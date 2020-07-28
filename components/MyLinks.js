const MyLinks = ({showIG}) => {
  return (
    <div style={{display: 'flex'}}>
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
      {showIG ? (
        <a
          className="link"
          href="https://www.instagram.com/malinda.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram-logo.png" alt="Instagram link" />
        </a>
      ) : null}
      <style jsx>
        {`
          .link {
            margin: 0.5em 0.5em;
            width: 35px;
          }
        `}
      </style>
    </div>
  );
};

export default MyLinks;
