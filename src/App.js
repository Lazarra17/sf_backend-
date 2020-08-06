import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";
import "./services/font-awesome";

import { PersistGate } from "redux-persist/integration/react";
import history from "./services/history";
import Routes from "./routes/index";
import { store, persistor } from "./store";
import GlobalStyle from "./styles/global";

import { ToastContainer } from "react-toastify";
const App = (props) => {
  console.log("process.env.APP_API_URL", process.env);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
