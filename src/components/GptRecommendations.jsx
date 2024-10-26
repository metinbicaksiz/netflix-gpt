import React from 'react';
import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const GptRecommendations = () => {
    const { movieNames, movieResults } = useSelector(state => state.gpt);
    if (!movieNames) return null;

    return (
        <div className="p-4 m-10 bg-black bg-opacity-80 text-white rounded-lg">
            <div>
                {
                    movieResults.map((movie, index) => (
                        <MovieList key={movie.title} title={movieNames[index]} movies={movieResults[index]} />
                    ))
                }
            </div>
        </div>
    );
};

export default GptRecommendations;
