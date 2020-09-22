import Link from 'next/link'
import { Nav, Line, Container } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <Container>
        <Link href="/catering">
          <img src="/icons/catering_mobile.svg" alt="catering icon" />
        </Link>
        <Link href="/catering">
          <p>Catering</p>
        </Link>
      </Container>
      <Line />
      <Container>
        <Link href="/">
          <img src="/icons/sun_mobile.svg" alt="home icon" />
        </Link>
        <Link href="/">
          <p>Hem</p>
        </Link>
      </Container>
      <Line />
      <Container>
        <Link href="/events">
          <img src="/icons/event_mobile.svg" alt="events icon" />
        </Link>
        <Link href="/events">
          <p>Event</p>
        </Link>
      </Container>
    </Nav>
  )
}
