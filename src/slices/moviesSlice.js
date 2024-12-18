import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        trendingVideos: null,
        upcomingMovies: null,
        selectedMovieId: null,
        selectedMovie: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        changeSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        },
        changeSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTrendingMovies, addUpcomingMovies, changeSelectedMovieId, changeSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;

