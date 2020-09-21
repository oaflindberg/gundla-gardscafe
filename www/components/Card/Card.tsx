import { StyledCard, MainInfo } from './style'

interface CardProps {
  title: String
  date: String
  description: string
  image: string
}

export default function Card({ image, title, date, description }: CardProps) {
  return (
    <StyledCard>
      <img src={image} alt={description} />
      <MainInfo>
        <h1>{title}</h1>
        <h3>{date}</h3>
      </MainInfo>
      <p>{description}</p>
    </StyledCard>
  )
}
