import Layout from 'components/Layout/Layout'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import Card from 'components/Card/Card'
import EventForm from 'components/Forms/EventForm/EventForm'
import Section from 'components/Section/Section'
import BlockContent from '@sanity/block-content-to-react'
import { format } from 'date-fns'
import { useMediaQuery } from 'react-responsive'

export default function EventPage({ eventData, eventPageData }) {
  const isDevice = {
    mobile: useMediaQuery({
      query: '(max-width: 767px)',
    }),
    desktop: useMediaQuery({
      query: '(min-width: 768px)',
    }),
  }

  const pageData = eventPageData[0]

  return (
    <Layout pageTitle="Gundla Gårdscafé | Evenemang">
      <Section
        style={{
          backgroundImage: `url(${urlFor(pageData.heroImage).toString()})`,
          height: '50vh',
          color: '#eee',
          backgroundSize: 'cover',
          fontWeight: 500,
          margin: 0,
          paddingLeft: isDevice.mobile ? '20px' : 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isDevice.desktop ? 'center' : '',
          textAlign: isDevice.desktop ? 'center' : 'left',
        }}
      >
        <h1>{pageData.pageTitle}</h1>
        <BlockContent blocks={pageData.descriptionOne} />
      </Section>
      <Section style={{ margin: isDevice.mobile ? '0' : '' }}>
        <div style={{ display: 'flex', overflowX: 'scroll' }}>
          {eventData.map((event, i) => {
            return (
              <Card
                key={i}
                image={urlFor(event.mainImage).toString()}
                title={event.title}
                date={format(new Date(event.date), 'd LLL')}
                description={event.body}
              />
            )
          })}
        </div>
      </Section>
      <Section>
        <EventForm />
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const eventPageQuery = "*[_type == 'eventPage']"
  const eventPageContent = await client.fetch(eventPageQuery)

  const eventQuery = "*[_type == 'event']"
  const eventContent = await client.fetch(eventQuery)

  return {
    props: {
      eventData: eventContent,
      eventPageData: eventPageContent,
    },
  }
}
