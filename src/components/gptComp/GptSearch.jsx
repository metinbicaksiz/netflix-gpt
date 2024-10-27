import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptRecommendations from "./GptRecommendations";
import {BROWSE_BG} from "../../utils/constants";

const GptSearch = () => {
    return (
        <>
        <div className="fixed -z-20">
            <img
                className="h-screen object-cover md:w-screen"
                src={BROWSE_BG}
                alt="bg"/>
        </div>
            <div className="">
                <GptSearchBar/>
                <GptRecommendations/>
            </div>
        </>
    );
};

export default GptSearch;