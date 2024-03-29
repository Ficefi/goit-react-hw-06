import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persisted, store } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<b>load...</b>} persistor={persisted}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
