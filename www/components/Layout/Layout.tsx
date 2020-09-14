import Head from 'next/head';
import Footer from 'components/Footer/Footer'
import GlobalStyle from 'styles/Global'

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />

      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
