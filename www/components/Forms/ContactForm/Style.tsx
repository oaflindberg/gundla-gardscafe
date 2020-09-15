import styled from '@emotion/styled'

export const StyledForm = styled.fieldset`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 90vw;
  padding: 20px 0;
  border: none;

  input {
    margin: 5px 0;
    width: 100%;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border: none;
    padding: 5px 0 5px 5px;
  }

  textarea {
    width: 100%;
    height: 25vh;
    resize: none;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border: none;
    padding: 5px 0 5px 5px;
  }
`
