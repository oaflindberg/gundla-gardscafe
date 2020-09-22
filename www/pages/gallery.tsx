import Layout from 'components/Layout/Layout'
import { useEffect, useState } from 'react'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import { Container } from 'styles/Gallery'

export default function GalleryPage({ galleryData }) {
  const pageData = galleryData[0]
  const [gallery, setGallery] = useState<any>()

  useEffect(() => {
    fetch('https://www.instagram.com/gundlagardscafe/?__a=1').then((res) => {
      setGallery(res)
    })
  }, [])

  console.log(gallery)

  return (
    <Layout pageTitle="Gundla Gårdscafé | Galleri">
      <Container
        style={{
          backgroundImage: `url(${urlFor(pageData.heroImage).toString()})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>{pageData.pageTitle}</h1>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const gallerQuery = "*[_type == 'galleryPage']"
  const galleryContent = await client.fetch(gallerQuery)

  return {
    props: {
      galleryData: galleryContent,
    },
  }
}
