import { StyledSection } from './Style'

interface Props {
  [key: string]: any
  children?: React.ReactNode
}

const Section = ({ children, style }: Props) => {
  return <StyledSection style={style}>{children}</StyledSection>
}

export default Section
