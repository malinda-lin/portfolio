/* eslint-disable react/prop-types */
import Head from 'next/head';
import NavBar from './Navbar';

export const siteTitle = 'Malinda Lin | Software Engineer';

export default function Layout({children, home}) {
  return (
    <div style={{height: '100%', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
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
      {children}
    </div>
  );
}
