import Head from 'next/head';
import {useEffect} from 'react';
import Layout, {siteTitle} from '../components/layout';
import butterflyAnimation from '../animations/butterflyScene';

export default function Home() {
  useEffect(() => {
    butterflyAnimation();
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
      </section>
    </Layout>
  );
}
