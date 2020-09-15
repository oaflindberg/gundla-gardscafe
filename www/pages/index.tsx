import client from 'client/api'
import Layout from 'components/Layout/Layout'
import urlFor from 'utils/urlBuilder'
import BlockContent from '@sanity/block-content-to-react'

export default function Home({ homepageData }) {
  const home = homepageData[0]

  return (
    <Layout pageTitle="Gundla Gårdscafé | Startsida">
      <img src={urlFor(home.imageOne).toString()}></img>
      <h1>{home.titleOne}</h1>
      <BlockContent blocks={home.descriptionOne} />
      <button type="button">{home.menu_button}</button>
      <h1>{home.titleTwo}</h1>
      <BlockContent blocks={home.descriptionTwo} />
      <img src={urlFor(home.imageTwo).toString()} />
      <button type="button">{home.calendar_button}</button>
      <button type="button">{home.catering_button}</button>
    </Layout>
  )
}

export async function getStaticProps() {
  const homepageQuery = "*[_type == 'homepage']"
  const homepageContent = await client.fetch(homepageQuery)

  return {
    props: {
      homepageData: homepageContent,
    },
  }
}
