import Head from 'next/head';

const Layout = ({ children, content }) => {
  return (
    <>
      <Head>
        <title>{content[0].pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>

      <footer>
        <div>FOOTER</div>
      </footer>
    </>
  );
};

export default Layout;
