import { css } from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (min-width: 960px) {
      font-size: 18px;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export default globalStyles;
