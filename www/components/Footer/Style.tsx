import styled from '@emotion/styled'

export const StyledFooter = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  max-width: 920px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  button {
    background: #892b26;
    border-radius: 40px;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    color: #fff;
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
  justify-content: space-evenly;
`
