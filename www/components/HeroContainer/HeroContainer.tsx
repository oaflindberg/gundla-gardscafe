import StyledContainer from './Style'

interface Props {
  children: React.ReactNode
}

const HeroContainer = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default HeroContainer
