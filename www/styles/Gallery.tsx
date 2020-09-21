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

  @media screen and (min-width: 768px) {
    padding-left: 0;
    align-items: center;
    text-align: center;
    color: #eee;
    font-weight: 500;
    padding: 0;
  }
`
