import { Global, css } from '@emotion/core'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: inherit;
        }

        p {
          font-family: 'Inter', sans-serif;
        }

        h1,
        h2,
        h3 {
          font-family: 'Cookie', cursive;
          font-weight: 300;
          font-size: 4rem;
        }

        input[type='submit'] {
          background: #47996d;
          border-radius: 40px;
          border: none;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
          color: #fbf3e0;
          cursor: pointer;
          font-size: 1.2rem;
          margin: 0 0 50px 0;
          padding: 10px 50px;
          width: 50%;
        }
      `}
    />
  )
}

export default GlobalStyle
