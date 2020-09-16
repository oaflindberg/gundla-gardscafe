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
          font-size: 2.5rem;
        }
      `}
    />
  )
}

export default GlobalStyle
