import modalReducer from "@/redux/slice/modalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    modal: modalReducer,
});
export const store = configureStore({
    reducer: reducer,
});