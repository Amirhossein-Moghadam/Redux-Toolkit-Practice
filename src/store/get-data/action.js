import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import ACTION_TYPES from "../action-type";
import mockApi from "./mockApi";


const getDataAction = createAction(ACTION_TYPES.GET_DATA, (payload) => {
    return {
        payload
    }
})

const isLoadingAction = createAction(ACTION_TYPES.IS_LOADING, (payload) => {
    return {
        payload
    }
})

const handleDataAction = createAsyncThunk(ACTION_TYPES.HANDLE_DATA, async (url, thunkOption) => {
    const { dispatch } = thunkOption;
    try {
        dispatch(isLoadingAction(true));
        const res = await mockApi(url);
        dispatch(getDataAction(res));
        dispatch(isLoadingAction(false));
    } catch (error) {
        console.log(error);
    }
})

export default handleDataAction;