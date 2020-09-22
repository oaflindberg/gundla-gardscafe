import styled from '@emotion/styled'

export const StyledFooter = styled.div`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 100px 0;
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
  }
`

export const ButtonContainer = styled.div`
  max-width: 920px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  button {
    background: #47996d;
    border-radius: 40px;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    color: #eee;
    font-size: 1.2rem;
    margin: 18px 0;
    padding: 10px 50px;
    width: 100%;
    cursor: pointer;
  }
`

export const Container = styled.div`
  width: 100vw;
  max-width: 920px;
  margin: 20px 0;
  display: flex;
  justify-content: center;

  img {
    margin: 0 20px;
  }
`

export const ContactContainer = styled.div`
  max-width: 920px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
    margin-bottom: 15px;
  }

  img {
    padding: 5px 5px 0 5px;
  }
`
