import client from 'client/api'
import urlFor from 'utils/urlBuilder'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [data, setData] = useState('')

  useEffect(() => {
    let fetch = client.fetch(`*[_type == 'footer']`).then((res) => {
      setData(res)
    })
  }, [])

  console.log(data[0])

  return (
    <footer>
      <p>{data[0].mail}</p>
      <p>{data[0].telefon}</p>
    </footer>
  )
}
