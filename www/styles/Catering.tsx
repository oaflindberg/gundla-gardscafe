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
  height: 70vh;
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
