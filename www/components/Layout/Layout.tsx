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
        <meta
          name="Description"
          content="Vi är ett utomhuscafé i kanten av Delsjö Naturreservat som utöver smarrig fika och härliga sallader, erbjuder en skön och avslappnad miljö bort från stress och oro. Här ersätter vi stadens brus med trädens sus."
        />
        <meta
          name="keywords"
          content="café, cafe, kafe, kafé, fika, kaffe sommar, natur, sommarcafé, sommarkafé"
        />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
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
