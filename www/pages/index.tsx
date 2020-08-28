import client from "../client/api";

export default function Home({data}) {
  console.log(data)  

  return (
    <div>
      <h1>{data[0].title}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const query = "*[_type == 'post']"
  const content = await client.fetch(query)

  return {
    props: {
      data: content
    }
  }

}
