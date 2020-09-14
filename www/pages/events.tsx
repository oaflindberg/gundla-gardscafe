import Layout from 'components/Layout/Layout'
import client from 'client/api'
import Card from 'components/Card/Card'
import {format} from 'date-fns'

export default function EventPage( { eventData }) {
  return (
    <Layout content ="">
      {eventData.map((event, i) => {
        return (
          <Card key={i} title={event.title} date={format(new Date(event.date), 'd LLLL')} description={event.body} />
        )
      })}
    </Layout>
  )
}

export async function getStaticProps() {
  const eventQuery = "*[_type == 'event']";
  const eventContent = await client.fetch(eventQuery);

  return {
    props: {
      eventData: eventContent,
    },
  };
}