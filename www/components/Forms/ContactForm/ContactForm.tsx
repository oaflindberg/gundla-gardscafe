import { useState } from 'react'
import { StyledForm } from './Style'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <form
      id="fs-frm"
      acceptCharset="utf-8"
      action="https://formspree.io/maylwjvn"
      method="post"
      onSubmit={sendEmail}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <StyledForm id="fs-frm-inputs">
        <label htmlFor="full-name">Namn</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="Jane Doe"
          required={true}
        />
        <label htmlFor="email-address">Mail</label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="mail@mail.com"
          required={true}
        />
        <label htmlFor="message">Meddelande</label>
        <textarea
          name="message"
          id="message"
          placeholder="Meddelande."
          required={true}
        />
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </StyledForm>
      {status === 'SUCCESS' ? (
        <p>Skickat!</p>
      ) : (
        <input type="submit" value="Skicka" />
      )}
      {status === 'ERROR' && <p>Något gick fel, försökt igen!</p>}
    </form>
  )
}
