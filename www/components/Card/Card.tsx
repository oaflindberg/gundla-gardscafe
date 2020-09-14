import { StyledCard, Date } from './style'

export default function Card({ title, date, description }) {
  return (
    <StyledCard>
      <div>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
      <Date>
      <h3>{date}</h3>
      </Date>
    </StyledCard>
  )
}