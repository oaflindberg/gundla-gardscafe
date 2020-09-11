import client from 'client/api';
import Layout from 'components/Layout/Layout';
import { Fragment } from 'react';
import urlFor from '../utils/urlBuilder';
import BlockContent from '@sanity/block-content-to-react';

export default function Home({ homepageData }) {
  const home = homepageData[0];
  console.log(home);

  return (
    <Layout content={homepageData}>
      <img src={urlFor(home.imageOne).toString()}></img>
      <h1>{home.titleOne}</h1>
      <BlockContent blocks={home.descriptionOne} />
      <button type="button">{home.menu_button}</button>
      <h1>{home.titleTwo}</h1>
      <BlockContent blocks={home.descriptionTwo} />
      <img src={urlFor(home.imageTwo).toString()}></img>
      <button type="button">{home.book_button}</button>
      <button type="button">{home.catering_button}</button>
    </Layout>
  );
}

export async function getStaticProps() {
  // const eventQuery = "*[_type == 'event']";
  // const eventContent = await client.fetch(eventQuery);

  // const menuQuery = "*[_type == 'menu']";
  // const menuContent = await client.fetch(menuQuery);

  const homepageQuery = "*[_type == 'homepage']";
  const homepageContent = await client.fetch(homepageQuery);

  return {
    props: {
      homepageData: homepageContent,
    },
  };
}
