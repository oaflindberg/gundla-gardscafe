import Link from 'next/link'
import { Nav, Line } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <Link href="/catering">
        <img src="/icons/catering_mobile.svg" />
      </Link>
      <Line />
      <Link href="/">
        <img src="/icons/sun_mobile.svg" />
      </Link>
      <Line />
      <Link href="/events">
        <img src="/icons/event_mobile.svg" />
      </Link>
    </Nav>
  )
}
