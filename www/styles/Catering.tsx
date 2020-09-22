import styled from '@emotion/styled'

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export const CateringBtns = styled.button`
  background: none;
  border: none;
  line-height: 103.4%;
  color: #fff;
  font-size: 2rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
`

export const Image = styled.img`
  height: 35vh;
  margin: 0;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    margin: 20px 10vw;
  }
`

export const Container = styled.div`
  height: 50vh;
  margin: 0;
  color: #eee;
  text-align: center;
  justify-content: center;
`
