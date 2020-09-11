import Head from 'next/head';
import GlobalStyle from 'styles/Global'

const Layout = ({ children, content }) => {
  return (
    <>
      <Head>
        <title>{`Gundla Gårdscafe | ${content[0].pageTitle}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />

      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>

      <footer>
        <div>FOOTER</div>
      </footer>
    </>
  );
};

export default Layout;
