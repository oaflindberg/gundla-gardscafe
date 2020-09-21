import Layout from 'components/Layout/Layout'
import { Container } from 'styles/Gallery'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import { useEffect, useState } from 'react'

export default function GalleryPage({ galleryData }) {
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
          backgroundImage: `url(${urlFor(
            galleryData[0].heroImage
          ).toString()})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>{galleryData[0].pageTitle}</h1>
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
