import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import handleDataReducer from "./get-data/reducer";
import userSituationReducer from "./user-situation/reducer";

const combinedReducer = combineReducers({
    handleDataReducer,
    userSituationReducer
})

const store = configureStore({ reducer: combinedReducer })

export default store;