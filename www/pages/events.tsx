import BlockContent from '@sanity/block-content-to-react'
import { format } from 'date-fns'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import Layout from 'components/Layout/Layout'
import Card from 'components/Card/Card'
import EventForm from 'components/Forms/EventForm/EventForm'
import Section from 'components/Section/Section'
import { Container, Events } from 'styles/Event'

export default function EventPage({ eventData, eventPageData }) {
  const pageData = eventPageData[0]

  return (
    <Layout pageTitle="Gundla Gårdscafé | Evenemang">
      <Container
        style={{
          backgroundImage: `url(${urlFor(pageData.heroImage).toString()})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>{pageData.pageTitle}</h1>
        <BlockContent blocks={pageData.descriptionOne} />
      </Container>
      {/* <Section style={{ marginRight: 0 }}> */}
      <Events>
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
      </Events>
      {/* </Section> */}
      <Section>
        <EventForm />
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const eventPageQuery = "*[_type == 'eventPage']"
  const eventPageContent = await client.fetch(eventPageQuery)

  const eventQuery = "*[_type == 'event']|order(date)"
  const eventContent = await client.fetch(eventQuery)

  return {
    props: {
      eventData: eventContent,
      eventPageData: eventPageContent,
    },
  }
}
