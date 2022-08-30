import * as ReactDOMClient from "react-dom/client"
import App from "./containers/App"
import { Provider } from "react-redux"
import store from "./store/index"

const container = document.getElementById("root")

// Create a root.
const root = ReactDOMClient.createRoot(container)

// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
