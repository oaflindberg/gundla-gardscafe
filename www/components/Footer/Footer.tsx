import Link from 'next/link'
import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [data, setData] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == 'footer']`).then((res) => {
      setData(res)
    })
  }, [])

  console.log(data[0])

  return (
    <footer>
      {data.length > 0 && (
        <>
          <button type="button">{data[0].find_us}</button>
          <Link href="/gallery">
            <a>
              <button type="button">{data[0].gallery}</button>
            </a>
          </Link>
          <a href={data[0].facebook_url}>Facebook</a>
          <a href={data[0].instagram_url}>Instagram</a>
          <a href={data[0].twitter_url}>Twitter</a>
          <a href={`mailto:${data[0].mail}`}>{data[0].mail}</a>
          <a href="tel:+46708840717">{data[0].telefon}</a>
        </>
      )}
    </footer>
  )
}
