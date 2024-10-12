import React from 'react';
import {CiCircleInfo, CiPlay1} from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="m-5 flex">
                <button className="bg-white font-medium text-black p-4 px-10 text-3xl rounded-md mr-2 flex hover:bg-opacity-70">
                    <CiPlay1 className="size-8 mx-2"/>
                    Play</button>
                <button className="bg-gray-500 text-white font-medium p-4 px-10 text-3xl bg-opacity-70 rounded-md mx-2 flex hover:bg-white hover:text-black">
                    <CiCircleInfo className="size-8 mx-2"/>
                    More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;