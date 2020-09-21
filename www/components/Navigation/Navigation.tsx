import Link from 'next/link'
import { Nav, Line, Container } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <Container>
        <Link href="/catering">
          <img src="/icons/catering_mobile.svg" />
        </Link>
        <Link href="/catering">
          <p>Catering</p>
        </Link>
      </Container>
      <Line />
      <Container>
        <Link href="/">
          <img src="/icons/sun_mobile.svg" />
        </Link>
        <Link href="/">
          <p>Hem</p>
        </Link>
      </Container>
      <Line />
      <Container>
        <Link href="/events">
          <img src="/icons/event_mobile.svg" />
        </Link>
        <Link href="/events">
          <p>Event</p>
        </Link>
      </Container>
    </Nav>
  )
}
