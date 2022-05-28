import styled from 'styled-components'

export const GlobalStyles = styled.div`
  :root {
    --highlight: #f5850b;
    --background: white;
    --black: #000;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }
  * {
    font-family: DM Sans, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }
  a {
    color: var(--highlight);
  }
  input {
    height: 30px;
    background-color: #fff;
    border: 1px solid transparent;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom: 1px solid #f5f5f5;
    color: #2e2e2e;
    width: 100%;
    padding: 0;
    transition: all 0.4s;
    border-radius: 0;
    outline: none;
    &:hover {
      box-shadow: unset;
      border: 1px solid transparent;
      border-bottom-color: transparent;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom: 1px solid #999;
      transition: all 0.4s;
    }
  }

  label,
  p,
  span {
    font-family: DM Sans, sans-serif;
  }
  label,
  input {
    cursor: pointer;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
