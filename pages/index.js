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
      <div style={{height: '100vh', width: '100%', backgroundColor: 'white'}} />
    );
  };

  const adjustOrientation = () => {
    if (screen.width < 600) {
      screen.orientation.lock('landscape');
    }
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
    adjustOrientation();
    loadFont();
  });

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Malinda Lin's Portfolio" />
        <meta name="viewport" content="width-device-width" />
        <title>Malinda Lin | Software Engineer</title>
      </Head>
      {isLoaded()}
    </div>
  );
}

export default Root;
