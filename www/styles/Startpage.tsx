import styled from '@emotion/styled'

export const Paper = styled.div`
  background: url('/images/pieceofpaper.png');
  text-align: center;
  background-size: contain;
  height: auto;
  padding: 5vh 0;
  background-repeat: none;
  margin: 5vh 0;

  h1 {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 3rem;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 0.9rem;

    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const PaperTextContainer = styled.div`
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Btn = styled.button`
  background: #47996d;
  border-radius: 40px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  color: #fbf3e0;
  font-size: 1.5rem;
  margin: 50px 0;
  margin-bottom: 20px;
  width: 50vw;
  cursor: pointer;
  height: 5vh;

  @media screen and (min-width: 768px) {
    width: 15vw;
  }
`

export const SectionContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 5vh 10vw 0 10vw;
  }
`

export const StyledSection = styled.div`
  margin: 0;

  h1 {
    margin-top: 5vh;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    width: 30vw;

    h1 {
      margin-top: 0;
    }
  }
`

export const Image = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;
  margin-left: -20px;

  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`
