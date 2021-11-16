import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../src/app/theme"

import "index.css"
import store from "store"
import reportWebVitals from "reportWebVitals"

const rootEl = document.getElementById("root")

// allow for hot module replacement
const render = () => {
  const App = require("app").default

  const wrappedApp = (
    <React.StrictMode>
      <Provider store={store}>
  {/*theme color change requested*/}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )

  ReactDOM.hydrate(wrappedApp, rootEl)
}

render()
if (module.hot) {
  module.hot.accept("app", render)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
