import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const store = legacy_createStore(reducer)

// const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;
