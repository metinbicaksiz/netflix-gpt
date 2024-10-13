import React from 'react';
import {IMAGE_URL} from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="pr-4 w-48">
            <img className="rounded-md"
                src={IMAGE_URL + posterPath}
                alt="Movie Poster"
            />
        </div>
    );
};

export default MovieCard;