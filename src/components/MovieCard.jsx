import React from 'react';
import {IMAGE_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if (!posterPath) return null;
    return (
        <div className="pr-4 md:w-48 w-40">
            <img className="rounded-md"
                src={IMAGE_URL + posterPath}
                alt="Movie Poster"
            />
        </div>
    );
};

export default MovieCard;