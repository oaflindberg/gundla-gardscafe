import { StyledCard, Date } from './style'
import {FC} from 'react'

interface CardProps {
  title: String,
  date: String,
  description: String
}

const Card: FC<CardProps> = ({ title, date, description }) => {
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

export default Card;