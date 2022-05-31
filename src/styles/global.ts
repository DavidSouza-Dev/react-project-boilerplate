import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --onHoverBackground: #ffffff1f;
    --borderColor: #0000000f;
    --backgroundListOptions: #f4f3f6;

    --red: #e52e4d;
    --blue: #5429CC;
    --green: #33cc95;
    --blue-ligth: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    margin-bottom: 1rem;
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
`
