import Layout from 'components/Layout/Layout'
import client from 'client/api'
import Card from 'components/Card/Card'
import EventForm from 'components/Forms/EventForm/EventForm'
import Section from 'components/Section/Section'
import { format } from 'date-fns'

export default function EventPage({ eventData }) {
  return (
    <Layout pageTitle="Gundla Gårdscafé | Evenemang">
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {eventData.map((event, i) => {
          return (
            <Card
              key={i}
              title={event.title}
              date={format(new Date(event.date), 'd LLL')}
              description={event.body}
            />
          )
        })}
      </div>
      <Section>
        <EventForm />
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const eventQuery = "*[_type == 'event']"
  const eventContent = await client.fetch(eventQuery)

  return {
    props: {
      eventData: eventContent,
    },
  }
}
