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
      <Section style={{ backgroundImage: 'url(/images/homepage_hero.jpg)' }}>
        <img src={urlFor(home.imageOne).toString()}></img>
        <h1 style={{ color: 'white' }}>{home.titleOne}</h1>
        <BlockContent style={{ color: 'white' }} blocks={home.descriptionOne} />
        <Btn type="button">{home.catering_button}</Btn>
      </Section>

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
