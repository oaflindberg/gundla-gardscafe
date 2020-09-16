import client from 'client/api'
import Layout from 'components/Layout/Layout'
import ContactForm from 'components/Forms/ContactForm/ContactForm'
import urlFor from '../utils/urlBuilder'
import BlockContent from '@sanity/block-content-to-react'
import { Fragment, useState } from 'react'
import { BtnContainer, CateringBtns } from 'styles/Catering'

export default function CateringPage({ cateringData, menuData }) {
  const catering = cateringData[0]

  const [isMenu, setIsMenu] = useState(false)

  return (
    <Layout pageTitle="Gundla Gårdscafé | Catering">
      <h1>{catering.title}</h1>
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
      {!isMenu ? (
        <>
          <>
            <img src={urlFor(catering.imageOne).toString()} />
            <BlockContent blocks={catering.catering_description} />
          </>
          <ContactForm />
        </>
      ) : (
        menuData.map((item, i) => {
          return (
            <Fragment key={i}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </Fragment>
          )
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
