import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { RegistrationReducer } from "./reducer";
import { defaultSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RegistrationReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(defaultSaga);
