import Link from 'next/link'
import { Nav, Line } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/catering">
          <img src="/icons/catering_mobile.svg" />
        </Link>
        <p>Catering</p>
      </div>
      <Line />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/">
          <img src="/icons/sun_mobile.svg" />
        </Link>
        <p>Hem</p>
      </div>
      <Line />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/events">
          <img src="/icons/event_mobile.svg" />
        </Link>
        <p>Event</p>
      </div>
    </Nav>
  )
}
