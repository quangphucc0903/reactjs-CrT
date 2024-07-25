import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    button1: false,
    button2: true,
    button1Text: 'Connect your X account',
    button1Change: 'bg-primary',
    button2Change: 'bg-white text-neutral-300 cursor-not-allowed',
    modalVisible: false,
};


export const modalSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        clickButton1(state) {
            state.button1 = true;
            state.button2 = false;
            state.button1Text = '@ABC123456';
            state.button1Change = '!bg-neutral-100 !text-neutral-400 border-none cursor-not-allowed';
            state.button2Change = '!bg-white text-primary border-primary';
        },
        openModal(state) {
            state.modalVisible = true;
        },
        closeModal(state) {
            state.modalVisible = false;
        },
    },
})
export const { clickButton1, openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;