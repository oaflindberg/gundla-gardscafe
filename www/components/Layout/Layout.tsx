import Head from 'next/head'
import Footer from 'components/Footer/Footer'
import Navigation from 'components/Navigation/Navigation'
import GlobalStyle from 'styles/Global'
import { Container } from './Style'

interface LayoutProps {
  children: React.ReactNode
  pageTitle: String
  test?: any
}

const Layout = ({ children, pageTitle, test }: LayoutProps) => {
  console.log(test)
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />

      <Container>{children}</Container>
      <Navigation />
      <Footer />
    </div>
  )
}
export default Layout
