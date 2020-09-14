import Head from 'next/head'
import Footer from 'components/Footer/Footer'
import GlobalStyle from 'styles/Global'
import { Container } from './Style'
import client from 'client/api'

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
      </Head>
      <GlobalStyle />

      <Container>{children}</Container>

      <Footer />
    </div>
  )
}
export default Layout
