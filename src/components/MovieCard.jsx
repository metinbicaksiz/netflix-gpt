import React from 'react';
import {API_OPTIONS, IMAGE_URL} from "../utils/constants";
import Modal from "./Modal";
import {useDispatch, useSelector} from "react-redux";
import {changeOpenModal} from "../slices/appConfigSlice";
import {changeSelectedMovie, changeSelectedMovieId} from "../slices/moviesSlice";

const MovieCard = ({movieId, posterPath}) => {
    const modal = useSelector(state => state.config.openModal);
    const dispatch = useDispatch();

    const openModal = async () => {
        dispatch(changeOpenModal(!modal));
        const data = await fetch(`https://api.themoviedb.org/3/movie/
            ${movieId}`, API_OPTIONS)
            .then(response => response.json())
            .then(json => dispatch(changeSelectedMovie(json)));
        dispatch(changeSelectedMovieId(movieId));
    }

    if (!posterPath) return null;
    return (
        <div
            className="md:w-48 w-40 cursor-pointer mx-3"
            onClick={openModal}
        >
            <img className="rounded-md"
                src={IMAGE_URL + posterPath}
                alt="Movie Poster"
            />
            {
                modal === true && <Modal/>
            }
        </div>
    );
};

export default MovieCard;