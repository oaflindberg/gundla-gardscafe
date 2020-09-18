import { useState } from 'react'
import { StyledForm } from './Style'

export default function EventForm() {
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
      action="https://formspree.io/moqpawrn"
      method="post"
      onSubmit={sendEmail}
    >
      <StyledForm id="fs-frm-inputs">
        <label htmlFor="event">Evenemang</label>
        <input
          type="text"
          name="event"
          id="event"
          placeholder="Jane Doe"
          required={true}
        />
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
        <label htmlFor="guests">Antal personer</label>
        <select id="guests">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
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
