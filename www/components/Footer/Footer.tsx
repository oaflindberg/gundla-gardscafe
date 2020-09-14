import client from 'client/api';
import urlFor from 'utils/urlBuilder'
import { FC } from 'react'

interface FooterProps {
  footerData?: any
}

const Footer: FC<FooterProps> = ( {footerData} ) => {
  console.log(footerData)

  return (
    <>
      <h1>Hej</h1>
    </>
  )
}

export async function getStaticProps() {
  const footerQuery = "*[_type == 'footer']";
  const footerContent = await client.fetch(footerQuery);

  return {
    props: {
      footerData: footerContent,
    },
  };
}

export default Footer