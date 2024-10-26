import {createSlice} from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name: "appConfig",
    initialState: {
        lang: "en",
        ai: "gemini"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        changeAI: (state, action) => {
            state.ai = action.payload;
        }
    }
})

export const {changeLanguage, changeAI} = appConfigSlice.actions;

export default appConfigSlice.reducer;
