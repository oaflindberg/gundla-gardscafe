import styled from '@emotion/styled'

export const Nav = styled.div`
  align-items: center;
  background: #2c2c2c;
  bottom: 0;
  display: flex;
  height: 7vh;
  justify-content: space-evenly;
  position: fixed;
  align-items: center;
  width: 100vw;
  color: #eee;
  font-size: 0.8rem;

  img {
    height: 30px;
    width: auto;
  }

  p {
    margin: 5px 0 0 0;
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    background: rgba(0, 0, 0, 0.35);
    top: 0;
  }
`

export const Line = styled.div`
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`
