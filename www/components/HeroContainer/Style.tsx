import styled from '@emotion/styled'

const StyledContainer = styled.div`
  height: 40vh;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 65vh;
    margin-left: 10vw;
  }
`

export default StyledContainer
