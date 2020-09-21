import styled from '@emotion/styled'

export const StyledForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 89vw;
  padding: 20px 0;
  border: none;
  font-family: 'Inter', sans-serif;

  label {
    margin-top: 10px;
    font-weight: 500;
  }

  input {
    background: #fff8ed;
    border-radius: 16px;
    border: none;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin: 5px 0;
    height: 5vh;
    padding-left: 10px;
    font-family: 'Inter', sans-serif;
    width: 100%;
  }

  textarea {
    background: #fff8ed;
    border-radius: 16px;
    border: none;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    height: 25vh;
    padding: 10px 0 0 10px;
    resize: none;
    width: 100%;
    font-family: 'Inter', sans-serif;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 30vw;
  }
`
