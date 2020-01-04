import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider as Theme, createGlobalStyle } from "styled-components";
import theme from "./theme";
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        *:focus {
            outline: none;
        }
    }
    button{
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;

      background: transparent;

      /* inherit font & color from ancestor */
      color: inherit;
      font: inherit;

      line-height: normal;
    }
`;

ReactDOM.render(
  <Theme theme={theme}>
    <GlobalStyle />
    <App />
  </Theme>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
