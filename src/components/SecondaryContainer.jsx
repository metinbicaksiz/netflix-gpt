import React from 'react';
import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <div className="-mt-72 pl-8 relative z-20 ">
                <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Trending"} movies={movies.trendingMovies} />
                <MovieList title={"UpComing Movies"} movies={movies.upcomingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;