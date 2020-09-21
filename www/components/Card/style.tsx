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
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    height: max-content;
    margin: 0;
    font-size: 1.4rem;
    padding-right: 20px;
  }
  img {
    width: 100%;
    height: auto;
  }

  p {
    padding: 0 20px;
  }
`

export const MainInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: flex-end;
`
