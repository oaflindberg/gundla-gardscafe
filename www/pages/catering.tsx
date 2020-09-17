import client from 'client/api'
import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import ContactForm from 'components/Forms/ContactForm/ContactForm'
import MenuItem from 'components/MenuItem/MenuItem'
import urlFor from '../utils/urlBuilder'
import BlockContent from '@sanity/block-content-to-react'
import { Fragment, useState } from 'react'
import { HeroImage, BtnContainer, CateringBtns } from 'styles/Catering'

export default function CateringPage({ cateringData, menuData }) {
  const catering = cateringData[0]

  const [isMenu, setIsMenu] = useState(false)

  return (
    <Layout pageTitle="Gundla Gårdscafé | Catering">
      <HeroImage src={urlFor(catering.heroImage).toString()} alt="Hero image" />
      <Section>
        <h1>{catering.pageTitle}</h1>
        <BtnContainer>
          <CateringBtns
            type="button"
            onClick={() => {
              setIsMenu(false)
            }}
          >
            {catering.contact_title}
          </CateringBtns>
          <CateringBtns
            type="button"
            onClick={() => {
              setIsMenu(true)
            }}
          >
            {catering.menu_title}
          </CateringBtns>
        </BtnContainer>
      </Section>
      {!isMenu ? (
        <>
          <>
            <Section>
              <h1>{catering.title}</h1>
              <BlockContent blocks={catering.catering_description} />
              <img src={urlFor(catering.imageOne).toString()} />
              <h1>{catering.titleTwo}</h1>
              <BlockContent blocks={catering.event_description} />
            </Section>
          </>
          <Section>
            <ContactForm />
          </Section>
        </>
      ) : (
        menuData.map((item, i) => {
          return <MenuItem key={i} title={item.title} description={item.body} />
        })
      )}
      {/* </Section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  const cateringQuery = "*[_type == 'catering']"
  const cateringContent = await client.fetch(cateringQuery)

  const menuQuery = "*[_type == 'menu']"
  const menuContent = await client.fetch(menuQuery)

  return {
    props: {
      cateringData: cateringContent,
      menuData: menuContent,
    },
  }
}
