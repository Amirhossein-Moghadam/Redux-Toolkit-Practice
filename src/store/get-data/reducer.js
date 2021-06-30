import { createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "../action-type";
import initState from "./state";

const handleDataReducer = createReducer(initState, {
    [ACTION_TYPES.GET_DATA]: (state, action) => {
        return {
            ...state,
            data: action.payload
        }
    },
    [ACTION_TYPES.IS_LOADING]: (state, action) => {
        return {
            ...state,
            isLoading: action.payload
        }
    }
})

export default handleDataReducer;