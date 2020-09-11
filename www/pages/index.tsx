import client from 'client/api';
import Layout from 'components/Layout/Layout';
import { Fragment } from 'react';
import urlFor from '../utils/urlBuilder';

export default function Home({ eventData, menuData }) {
  console.log(eventData.body);

  return (
    <Layout content={eventData}>
      {eventData.map((item, i) => {
        return (
          <Fragment key={i}>
            <h1>{item.body}</h1>
            <img src={urlFor(item.mainImage).toString()}></img>
          </Fragment>
        );
      })}
      {menuData.map((item, i) => {
        return (
          <Fragment key={i}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </Fragment>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const eventQuery = "*[_type == 'event']";
  const eventContent = await client.fetch(eventQuery);

  const menuQuery = "*[_type == 'menu']";
  const menuContent = await client.fetch(menuQuery);

  return {
    props: {
      eventData: eventContent,
      menuData: menuContent,
    },
  };
}
