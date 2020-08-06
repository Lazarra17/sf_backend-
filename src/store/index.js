import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

import persistReducers from "./persistReducers";
import history from "../services/history";

// Setting the middlewares
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware, routerMiddleware(history)];

// Creating the store
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);
// Running sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };
