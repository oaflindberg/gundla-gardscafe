import styled from '@emotion/styled'

const StyledContainer = styled.div`
  margin-left: 20px;
  margin-top: 7vh;

  span,
  p {
    color: #eee;
    font-weight: 500;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10vw;
  }
`

export default StyledContainer
