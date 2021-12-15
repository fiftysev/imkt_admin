import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";

import Store from "./store/store";

interface IState {
  store: Store;
}

export const store = new Store();

export const Context = React.createContext<IState>({
  store,
});

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
