import Link from 'next/link'
import client from 'client/api'
import { StyledFooter, Container, ButtonContainer } from './Style'
import urlFor from 'utils/urlBuilder'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    client.fetch(`*[_type == 'footer']`).then((res) => {
      if (res.length > 0) {
        setData(res[0])
      }
    })
  }, [])

  console.log(data)

  return (
    <footer>
      {data && (
        <StyledFooter>
          <ButtonContainer>
            <button type="button">{data.find_us}</button>
            <Link href="/gallery">
              <a>
                <button type="button">{data.gallery}</button>
              </a>
            </Link>
          </ButtonContainer>
          <Container>
            <a href={data.facebook_url}>Facebook</a>
            <a href={data.instagram_url}>Instagram</a>
            <a href={data.twitter_url}>Twitter</a>
          </Container>
          <Container>
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href="tel:+46708840717">{data.phone_number}</a>
          </Container>
        </StyledFooter>
      )}
    </footer>
  )
}
