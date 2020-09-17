import Link from 'next/link'
import client from 'client/api'
import {
  StyledFooter,
  Container,
  ButtonContainer,
  ContactContainer,
} from './Style'
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
            <a href={data.facebook_url}>
              <img
                src={urlFor(data.facebook_icon).toString()}
                alt="facebook icon"
              />
            </a>
            <a href={data.instagram_url}>
              <img
                src={urlFor(data.instagram_icon).toString()}
                alt="instagram icon"
              />
            </a>
          </Container>
          <ContactContainer>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <img src="/icons/phone_mobile.svg" />
              <a href="tel:+46708840717">{data.phone_number}</a>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <img src="/icons/mail_mobile.svg" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
          </ContactContainer>
        </StyledFooter>
      )}
    </footer>
  )
}
