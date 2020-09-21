import Link from 'next/link'
import { Nav, Line } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <div
        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <Link href="/catering">
          <img src="/icons/catering_mobile.svg" />
        </Link>
        <Link href="/catering">
          <p>Catering</p>
        </Link>
      </div>
      <Line />
      <div
        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <Link href="/">
          <img src="/icons/sun_mobile.svg" />
        </Link>
        <Link href="/">
          <p>Hem</p>
        </Link>
      </div>
      <Line />
      <div
        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      >
        <Link href="/events">
          <img src="/icons/event_mobile.svg" />
        </Link>
        <Link href="/events">
          <p>Event</p>
        </Link>
      </div>
    </Nav>
  )
}
