import Layout from 'components/Layout/Layout'
import { useEffect, useState } from 'react'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import { Container, InstagramFeed, Image } from 'styles/Gallery'

export default function GalleryPage({ galleryData }) {
  const pageData = galleryData[0]
  const [gallery, setGallery] = useState<any>()

  useEffect(() => {
    fetch('https://www.instagram.com/gundlagardscafe/?__a=1')
      .then((res) => {
        return res.json()
      })
      .then((feed) => {
        setGallery(feed)
      })
  }, [])

  let imageArray = []
  if (gallery) {
    imageArray = gallery.graphql.user.edge_owner_to_timeline_media.edges
  }

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
      <InstagramFeed>
        {imageArray.map((hej, i) => {
          return <Image src={hej.node.thumbnail_resources[2].src} />
        })}
      </InstagramFeed>
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
