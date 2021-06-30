import { createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "../action-type";
import initState from "./state";

const userSituationReducer = createReducer(initState, {
    [ACTION_TYPES.USER_SITUATION]: (state, action) => {
        return {
            ...state,
            userSituation: action.payload.userSituation,
            situationMessage: action.payload.situationMessage
        }
    }
})

export default userSituationReducer;