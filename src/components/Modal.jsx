import React, {useRef} from 'react';
import {X} from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {changeOpenModal} from "../slices/appConfigSlice";
import {IMAGE_URL} from "../utils/constants";

const Modal = () => {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const selected = useSelector(state => state.movies.selectedMovie);

    const closeModal = () => {
        dispatch(changeOpenModal(false));
    }

    return (
        <div ref={modalRef} className="fixed inset-0 bg-blue-300 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-black bg-opacity-80 w-3/4 h-5/6 rounded-lg overflow-scroll	">
                <button
                    onClick={closeModal}
                    className=""
                ><X/></button>
                <div className="flex flex-col justify-center items-center rounded-2xl">
                    <h1 className="text-5xl font-bold text-white">{selected?.title}</h1>
                    <img className="md:object-scale-down md:w-1/4 md:h-auto m-4 p-4 rounded-3xl"
                         src={IMAGE_URL + selected?.poster_path}
                         alt="Movie Poster"
                    />
                    <p className="text-2xl m-5 p-4 text-justify	text-white">{selected?.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;