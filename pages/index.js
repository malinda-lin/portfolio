import Head from 'next/head';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import Layout, {siteTitle} from '../components/Layout';
// import butterflyAnimation from '../animations/butterflyScene';
// import testScene from '../animations/other';

export default function Home() {
  const header = useRef();
  useEffect(() => {
    // butterflyAnimation();
    // testScene();
    gsap.from(header.current, {opacity: 0, duration: 1.5});
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section ref={header}>
        <div id="header">Malinda Lin</div>
        <div id="subtitle">Software Engineer & Designer</div>
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
          }
          #header {
            text-align: center;
            font-size: 28px;
            margin: 0.5em;
            
          }
          #subtitle {
            text-align: center;
            font-size: 18px;
          }
        `}
      </style>
    </Layout>
  );
}
