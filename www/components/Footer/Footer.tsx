import client from 'client/api';
import urlFor from 'utils/urlBuilder'

export default function Footer({ footerData }) {
  console.log(footerData)
  return (
    <div>
      <h1>FUNKA DÅ FÖR FAN</h1>
    </div>
  )
}

export async function getStaticProps() {
  const footerQuery = "*[_type == 'footer']";
  const footerContent = await client.fetch(footerQuery)

  return {
    props: {
      footerData: footerContent
    },
  };
}