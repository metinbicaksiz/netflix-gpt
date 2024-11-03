import React, {useRef} from 'react';
import {X} from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {changeOpenModal} from "../slices/appConfigSlice";
import {IMAGE_URL} from "../utils/constants";

const Modal = () => {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const selectedMovieId = useSelector(state => state.movies.selectedMovieId);
    const selected = useSelector(state => state.movies.selectedMovie);

    const closeModal = () => {
        dispatch(changeOpenModal(false));
    }

    console.log(selected);
    return (
        <div ref={modalRef} className="fixed inset-0 bg-blue-300 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-black bg-opacity-80 w-3/4 h-5/6 rounded-lg">
                <button
                    onClick={closeModal}
                    className=""
                ><X/></button>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold">{selected?.title}</h1>
                    <img className="rounded-md size-80 h-auto"
                         src={IMAGE_URL + selected?.poster_path}
                         alt="Movie Poster"
                    />
                    <p className="text-2xl m-5">{selected?.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;