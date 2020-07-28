import {useRef} from 'react';

const Email = () => {
  const email = useRef();
  const confirmation = useRef();

  const confirmCopied = () => {
    confirmation.current.style.display = 'block';
  };

  const copy = () => {
    const copyText = email.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    confirmCopied();
  };

  return (
    <span style={{position: 'relative'}}>
      <input
        type="text"
        readOnly
        ref={email}
        value="xqmlin@gmail.com"
        onClick={copy}
        placeholder="xqmlin@gmail.com"
      />
      <div ref={confirmation} id="confirmation">
        copied!
      </div>
      <style jsx>
        {`
          input {
            border: none;
            text-align: center;
            font-family: 'EBGaramond', sans-serif;
            font-size: 2.5vw;
            background-color: transparent;
          }
          input:active,
          input:focus {
            border-bottom: 1px dotted black;
            outline: none;
          }
          input::selection {
            background: transparent; /* WebKit/Blink Browsers */
          }
          input::-moz-selection {
            background: transparent; /* Gecko Browsers */
          }
          #confirmation {
            display: none;
            position: absolute;
            top: 60%;
            transform: translateY(-50%);
            font-size: 1vw;
            left: 95%;
            text-align: center;
            color: gray;
            font-family: hevetica;
            font-style: italic;
          }
          @media only screen and (max-width: 770px) {
            input {
              font-size: medium;
            }
            #confirmation {
              font-size: small;
            }
          }
        `}
      </style>
    </span>
  );
};

export default Email;
