import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: '6r4koqux',
  dataset: 'production',
  token: '',
  useCdn: true
});

export default client;