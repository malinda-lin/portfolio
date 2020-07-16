import Head from 'next/head';
import styles from './Layout.module.css';
import NavBar from './Navbar';

export const siteTitle = 'Malinda Lin | Software Engineer';

export default function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Malinda Lin's Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=optional"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <main>{children}</main>
      <footer />
    </div>
  );
}
