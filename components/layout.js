import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

export const siteTitle = 'Malinda Lin';

export default function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Malinda Lin's Portfolio" />
        {/* <script src="js/three.js"></script> */}
      </Head>

      <header />
      <main>{children}</main>
      <footer />
    </div>
  );
}