import client from 'client/api'
import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import urlFor from 'utils/urlBuilder'
import BlockContent from '@sanity/block-content-to-react'
import { Paper, Btn } from 'styles/Startpage'

export default function Home({ homepageData }) {
  const home = homepageData[0]

  return (
    <Layout pageTitle="Gundla Gårdscafé | Startsida">
      <img src={urlFor(home.imageOne).toString()}></img>
      <h1>{home.titleOne}</h1>
      <BlockContent blocks={home.descriptionOne} />
      <Btn type="button">{home.catering_button}</Btn>
      <Section>
        <h1>{home.titleTwo}</h1>
        <BlockContent blocks={home.descriptionTwo} />
      </Section>
      <img src={urlFor(home.imageTwo).toString()} />
      <Btn type="button">{home.calendar_button}</Btn>
      <Paper>
        <Section>
          <h1>{home.titleThree}</h1>
          <BlockContent blocks={home.descriptionThree} />
        </Section>
      </Paper>
      <img src={urlFor(home.imageThree).toString()} />
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
