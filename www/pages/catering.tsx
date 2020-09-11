import client from 'client/api';
import Layout from 'components/Layout/Layout';
import urlFor from '../utils/urlBuilder';
import BlockContent from '@sanity/block-content-to-react';
import { Fragment, useState } from 'react';

export default function CateringPage({ cateringData, menuData }) {
  const catering = cateringData[0];
  console.log(menuData);

  const [isMenu, setIsMenu] = useState(false);

  return (
    <Layout content={cateringData}>
      <h1>{catering.title}</h1>
      <button
        type="button"
        onClick={() => {
          setIsMenu(false);
        }}
      >
        {catering.contact_title}
      </button>
      <button
        type="button"
        onClick={() => {
          setIsMenu(true);
        }}
      >
        {catering.menu_title}
      </button>
      {!isMenu ? (
        <>
          <img src={urlFor(catering.imageOne).toString()} />
          <BlockContent blocks={catering.catering_description} />
        </>
      ) : (
        menuData.map((item, i) => {
          return (
            <Fragment key={i}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </Fragment>
          );
        })
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const cateringQuery = "*[_type == 'catering']";
  const cateringContent = await client.fetch(cateringQuery);

  const menuQuery = "*[_type == 'menu']";
  const menuContent = await client.fetch(menuQuery);

  return {
    props: {
      cateringData: cateringContent,
      menuData: menuContent,
    },
  };
}
