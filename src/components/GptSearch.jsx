import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptRecommendations from "./GptRecommendations";
import {BROWSE_BG} from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <img
                className="fixed -z-20"
                src={BROWSE_BG}
                 alt="bg"/>
            <GptSearchBar/>
            <GptRecommendations/>
        </div>
    );
};

export default GptSearch;