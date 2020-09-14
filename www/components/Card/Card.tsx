export default function Card({ title, date, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{date}</h3>
    </div>
  )
}