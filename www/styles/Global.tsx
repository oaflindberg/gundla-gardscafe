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
      `}
    />
  )
}

export default GlobalStyle
