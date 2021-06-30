import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "../action-type";

const userSituationAction = createAction(ACTION_TYPES.USER_SITUATION, (payload) => {
    return {
        payload
    }
})

export default userSituationAction;