import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    userName: '',
    buttonColor: 'bg-primary',
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        enableFollowButton: (state) => {
            state.isFollowButtonEnabled = true;
        },
        disableFollowButton: (state) => {
            state.isFollowButtonEnabled = false;
        },
        setUserName(state, action) {
            state.userName = action.payload;
        },
        setButtonColor(state, action) {
            state.buttonColor = action.payload;
        }
    },
})

export const { openModal, closeModal, enableFollowButton, disableFollowButton, setUserName, setButtonColor } = modalSlice.actions;
export default modalSlice.reducer;