import BlockContent from '@sanity/block-content-to-react'
import { useState } from 'react'
import client from 'client/api'
import urlFor from '../utils/urlBuilder'
import Layout from 'components/Layout/Layout'
import Section from 'components/Section/Section'
import ContactForm from 'components/Forms/ContactForm/ContactForm'
import MenuItem from 'components/MenuItem/MenuItem'
import { BtnContainer, CateringBtns, Image } from 'styles/Catering'

export default function CateringPage({ cateringData, menuData }) {
  const catering = cateringData[0]

  const [isMenu, setIsMenu] = useState(false)

  return (
    <Layout pageTitle="Gundla Gårdscafé | Catering">
      <Section
        style={{
          backgroundImage: `url(${urlFor(catering.heroImage).toString()})`,
          margin: 0,
          height: '50vh',
          color: '#eee',
          backgroundSize: 'cover',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
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
            </Section>
            <Image src={urlFor(catering.imageOne).toString()} />
            <Section>
              <h1>{catering.titleTwo}</h1>
              <BlockContent blocks={catering.event_description} />
            </Section>
          </>
          <Section style={{ display: 'flex', alignItems: 'flex-start' }}>
            <ContactForm />
          </Section>
        </>
      ) : (
        menuData.map((item, i) => {
          return <MenuItem key={i} title={item.title} description={item.body} />
        })
      )}
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
