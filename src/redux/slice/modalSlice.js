import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HomeAPI } from "@/services/ex";

const initialState = {
    isOpen: false,
    taskUser: {
        twitterUsername: '',
        telegramId: '',
        twitterId: '',
        discordId: '',
        joinChannelTelegram: false,
        joinVibxDiscord: false,
        joinTwitter: false,
      },
      loadingTaskUser: false,
};

export const getTaskUser = createAsyncThunk(
    'getTaskUser',
    async ( address , thunkAPI) => {
      const state = thunkAPI.getState();
      const home = state.home;
      try {
        const result = await Promise.all([
          HomeAPI.getUser(address),
          HomeAPI.getSocial(address),
          
          
        ]);
        if (result[0]?.msg || result[1]?.msg) {
          return { ...result[0]?.msg, ...result[1]?.msg };
        } else {
          return home.taskUser;
        }
      } catch (error) {
        return home.taskUser;
      }
    }
  );

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
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTaskUser.pending, (state) => {
            state.loadingTaskUser = true;
          })
          .addCase(getTaskUser.fulfilled, (state, actions) => {
            state.loadingTaskUser = false;
            state.taskUser = actions.payload;
          })
          .addCase(getTaskUser.rejected, (state) => {
            state.loadingTaskUser = false;
          });
      },
      
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;