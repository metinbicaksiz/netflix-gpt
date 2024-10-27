import React from 'react';
import {CiCircleInfo, CiPlay1} from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="mt-8 md:m-5 flex">
                <button className="bg-white font-medium text-black p-2 px-4 md:p-4 md:px-10 text-3xl rounded-md mr-2 flex hover:bg-opacity-70">
                    <CiPlay1 className="size-8 mx-2"/>
                    Play</button>
                <button className="hidden bg-gray-500 text-white font-medium p-4 px-10 text-3xl bg-opacity-70 rounded-md mx-2 md:flex hover:bg-white hover:text-black">
                    <CiCircleInfo className="size-8 mx-2"/>
                    More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;