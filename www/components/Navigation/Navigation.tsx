import Link from 'next/link'
import { Nav } from './Style'

export default function Navigation() {
  return (
    <Nav>
      <Link href="/catering">
        <a>Catering</a>
      </Link>
      <Link href="/">
        <a>Hem</a>
      </Link>
      <Link href="/events">
        <a>Events</a>
      </Link>
    </Nav>
  )
}
