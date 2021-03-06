import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import HeroContainer from 'components/HeroContainer/HeroContainer'
import {
  Paper,
  PaperTextContainer,
  Btn,
  SectionContainer,
  StyledSection,
  Image,
} from 'styles/Startpage'

export default function Home({ homepageData }) {
  const home = homepageData[0]

  return (
    <Layout pageTitle="Gundla Gårdscafé | Startsida">
      <Section
        style={{
          backgroundImage: `url(${urlFor(home.heroImage).toString()})`,
          backgroundSize: 'cover',
          margin: '0',
          height: '70vh',
        }}
      >
        <HeroContainer>
          <h1>{home.titleOne}</h1>
          <BlockContent blocks={home.descriptionOne} />
          <Link href="/catering">
            <Btn type="button">{home.catering_button}</Btn>
          </Link>
        </HeroContainer>
      </Section>

      <SectionContainer>
        <StyledSection>
          <h1>{home.titleTwo}</h1>
          <BlockContent blocks={home.descriptionTwo} />
          <Link href="/events">
            <Btn type="button">{home.calendar_button}</Btn>
          </Link>
        </StyledSection>
        <Image
          src={urlFor(home.imageTwo).toString()}
          alt={home.imageTwo_description}
        />
      </SectionContainer>

      <Paper>
        <Section style={{ alignItems: 'center' }}>
          <h1>{home.titleThree}</h1>
          <PaperTextContainer>
            <BlockContent blocks={home.descriptionThree} />
          </PaperTextContainer>
        </Section>
      </Paper>
      <img
        style={{ objectFit: 'cover' }}
        src={urlFor(home.imageThree).toString()}
        alt={home.imageThree_description}
      />
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
