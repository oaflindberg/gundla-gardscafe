import Layout from 'components/Layout/Layout'
import { useEffect, useState } from 'react'

export default function GalleryPage() {
  const [gallery, setGallery] = useState<any>()

  useEffect(() => {
    fetch('https://www.instagram.com/gundlagardscafe/?__a=1').then((res) => {
      setGallery(res)
    })
  }, [])

  console.log(gallery)

  return (
    <Layout pageTitle="Gundla Gårdscafé | Galleri">
      <h1>HELLO</h1>
    </Layout>
  )
}
