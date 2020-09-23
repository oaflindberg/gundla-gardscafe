import styled from '@emotion/styled'

export const StyledCard = styled.div`
  height: max-content;
  width: 80vw;
  background: #47996d;
  margin: 20px 10px;
  border-radius: 16px;

  h1 {
    margin: 0;
    margin-right: 20px;
    font-size: 5vmax;

    @media screen and (min-width: 768px) {
      font-size: 3vmax;
    }
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    height: max-content;
    margin: 0;
    font-size: 2vmax;
    padding-right: 20px;

    @media screen and (min-width: 768px) {
      font-size: 1.4vmax;
    }
  }
  img {
    height: 20vh;
    width: 100%;
    object-fit: cover;
  }

  p {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    min-width: 20vw;
  }
`

export const MainInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`
