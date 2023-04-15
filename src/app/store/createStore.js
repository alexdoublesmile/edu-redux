import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
