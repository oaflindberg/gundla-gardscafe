import { StyledCard } from './style'

interface CardProps {
  title: String
  date: String
  description: String
}

export default function Card({ title, date, description }: CardProps) {
  return (
    <StyledCard>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <h3>{date}</h3>
    </StyledCard>
  )
}
