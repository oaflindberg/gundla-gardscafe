import Head from 'next/head';

const Layout = ({ children, content }) => {
  return (
    <>
      <Head>
        <title>{content[0].title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>{children}</div>

      <footer>
        <div>Hej</div>
      </footer>
    </>
  );
};

export default Layout;
