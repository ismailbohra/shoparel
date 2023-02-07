import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./root_reducers";
import { watchSagas } from "./root_sagas";
import thunk from "redux-thunk";
const saga = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const createStoreWithMiddleware = applyMiddleware(saga, thunk);
const enhancer = composeEnhancers(createStoreWithMiddleware);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

saga.run(watchSagas);

export { store, persistor };
