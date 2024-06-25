import { App } from "components/App/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { storeAppState } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="films-react">
    <Provider store={storeAppState}>
      <App></App>
    </Provider>
  </BrowserRouter>
);
