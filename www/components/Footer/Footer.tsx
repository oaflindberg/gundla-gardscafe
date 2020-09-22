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
            <a href="https://www.google.com/maps/place/Gundla+mosse+32,+412+76+G%C3%B6teborg/@57.6863848,12.0264269,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff3e9fab7c319:0x881e787529cd7b7c!8m2!3d57.6863848!4d12.0286156">
              <button type="button">{data.find_us}</button>
            </a>
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
            <div>
              <img src="/icons/phone_mobile.svg" alt="phone icon" />
              <a href="tel:+46708840717">{data.phone_number}</a>
            </div>
            <div>
              <img src="/icons/mail_mobile.svg" alt="email icon" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
          </ContactContainer>
        </StyledFooter>
      )}
    </footer>
  )
}
