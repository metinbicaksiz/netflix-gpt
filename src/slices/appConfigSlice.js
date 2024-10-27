import {createSlice} from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        lang: "en",
        ai: "gemini",
        movieNumber: 1
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
        }
    }
})

export const {changeLanguage, changeAI, changeMovieNumber} = appConfigSlice.actions;

export default appConfigSlice.reducer;
