import React from 'react';
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies}) => {
    return (
        <div className="px-6">
            <h1 className="text-xl font-medium text-white md:text-3xl py-3">{title}</h1>
            <div className="flex overflow-x-scroll  ">
                <div className="flex">
                    {movies && movies.map((movie, index) => (
                        <MovieCard key={index} movieId={movie.id} posterPath={movie?.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;