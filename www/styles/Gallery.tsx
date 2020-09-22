import styled from '@emotion/styled'

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  color: #eee;
  font-weight: 500;
  margin: 0;
  padding: 0 20px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-left: 0;
    text-align: center;
    color: #eee;
    font-weight: 500;
    padding: 0;
  }
`

export const InstagramFeed = styled.div`
  margin: 20px;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5vh 0;

  @media screen and (min-width: 768px) {
    margin: 0 10vw;
    width: 80vw;
  }
`

export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
`

export const ImageContainer = styled.div`
  width: 30%;
  height: auto;
  margin: 20px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`
