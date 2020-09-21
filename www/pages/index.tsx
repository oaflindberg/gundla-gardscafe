import client from 'client/api'
import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import urlFor from 'utils/urlBuilder'
import BlockContent from '@sanity/block-content-to-react'
import { Paper, Btn } from 'styles/Startpage'
import { useMediaQuery } from 'react-responsive'

export default function Home({ homepageData }) {
  const home = homepageData[0]

  const isDevice = {
    mobile: useMediaQuery({
      query: '(max-width: 767px)',
    }),
    desktop: useMediaQuery({
      query: '(min-width: 768px)',
    }),
  }

  return (
    <Layout pageTitle="Gundla Gårdscafé | Startsida">
      <Section
        style={{
          backgroundImage: `url(${urlFor(home.heroImage).toString()})`,
          margin: 0,
          height: isDevice.desktop ? '65vh' : '40vh',
          padding: isDevice.desktop && '0 15vw',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: 'white' }}>{home.titleOne}</h1>
        <BlockContent blocks={home.descriptionOne} />
        <Btn type="button">{home.catering_button}</Btn>
      </Section>

      <div
        style={{
          marginTop: isDevice.mobile ? '5vh' : '10vh',
          display: isDevice.desktop && 'flex',
        }}
      >
        <Section style={{ width: isDevice.desktop && '35vw' }}>
          <h1 style={{ marginBottom: '5px', marginTop: '0' }}>
            {home.titleTwo}
          </h1>
          <BlockContent blocks={home.descriptionTwo} />
          <Btn type="button">{home.calendar_button}</Btn>
        </Section>
        <img
          style={{
            height: '50vh',
            width: isDevice.mobile ? '100vw' : '35vw',
            objectFit: 'cover',
          }}
          src={urlFor(home.imageTwo).toString()}
        />
      </div>

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
