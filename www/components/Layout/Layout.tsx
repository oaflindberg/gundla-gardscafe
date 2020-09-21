import Head from 'next/head'
import Footer from 'components/Footer/Footer'
import Navigation from 'components/Navigation/Navigation'
import GlobalStyle from 'styles/Global'
import { Container } from './Style'

interface LayoutProps {
  children: React.ReactNode
  pageTitle: String
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />

      <Container>{children}</Container>
      <Navigation />
      <Footer />
    </div>
  )
}
export default Layout
