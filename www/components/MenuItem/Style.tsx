import styled from '@emotion/styled'

export const PaperItem = styled.div`
  background: url('/images/pieceofpaper.png');
  padding: 20px 10px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: contain;
  margin: 40px 0;

  h1 {
    margin: 0;
    color: #633b00;
    line-height: 133.4%;
    font-size: 3rem;
  }

  p {
    color: #633b00;
    line-height: 133.4%;
  }

  @media screen and (min-width: 768px) {
    align-items: center;

    h1 {
      font-size: 5rem;
    }
  }
`
