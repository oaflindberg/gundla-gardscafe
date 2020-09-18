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
  font-family: 'Inter', sans-serif;

  label {
    font-weight: 500;
  }

  input[type='submit'] {
    background: #47996d;
    border-radius: 40px;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    color: #fbf3e0;
    font-size: 1.2rem;
    margin: 50px auto;
    padding: 10px 50px;
    width: 50%;
    cursor: pointer;
  }

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
