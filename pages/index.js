import Head from 'next/head';
import {useEffect, useState} from 'react';

import Home from './home';

function Root() {
  const [loaded, setLoaded] = useState(false);

  const isLoaded = () => {
    if (loaded) {
      return <Home />;
    }
    return (
      <div style={{height: '100vh', width: '100%', backgroundColor: 'white'}}>
        {/* <div id="dot-container">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <style jsx>
          {`
            #dot-container {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
              padding: 1em;
              display: flex;
              justify-content: center;
            }
            .dot {
              margin: 1em;
              height: 1em;
              width: 1em;
              background-color: transparent;
              border-radius: 50%;
              animation: loading 2s infinite;
            }
            @keyframes loading {
              from {
                background-color: transparent;
              }
              50% {
                background-color: black;
              }
              to {
                background-color: transparent;
              }
            }
            .dot:nth-child(2) {
              animation-delay: 200ms;
            }
            .dot:nth-child(3) {
              animation-delay: 400ms;
            }
          `}
        </style> */}
      </div>
    );
  };

  const loadFont = async () => {
    const DancingScript = new FontFace(
      'Dancing Script',
      'url(fonts/DancingScript-VariableFont_wght.ttf)'
    );

    const Ledger = new FontFace('Ledger', 'url(fonts/Ledger-Regular.ttf)');

    const EBGaramond = new FontFace(
      'EBGaramond',
      'url(fonts/EBGaramond-VariableFont_wght.ttf)'
    );

    await Ledger.load();
    await EBGaramond.load();
    await DancingScript.load();

    await document.fonts.add(Ledger);
    await document.fonts.add(EBGaramond);
    await document.fonts.add(DancingScript);

    document.fonts.ready.then(function(fontFaceSet) {
      if (fontFaceSet.status === 'loaded') {
        setLoaded(true);
      }
    });
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Malinda Lin's Portfolio" />
        <title>Malinda Lin | Software Engineer</title>
      </Head>
      {isLoaded()}
    </div>
  );
}

export default Root;
