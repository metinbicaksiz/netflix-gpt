import {createSlice} from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        lang: "en",
        ai: "gemini",
        movieNumber: 1,
        openModal: false
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        changeAI: (state, action) => {
            state.ai = action.payload;
        },
        changeMovieNumber: (state, action) => {
            state.movieNumber = action.payload;
        },
        changeOpenModal: (state, action) => {
            state.openModal = action.payload;
        }
    }
})

export const {changeLanguage, changeAI, changeMovieNumber, changeOpenModal} = appConfigSlice.actions;

export default appConfigSlice.reducer;
