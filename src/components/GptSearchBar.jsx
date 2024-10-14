import React from 'react';
import lang from "../utils/languageConstants";
import {useSelector} from "react-redux";

const GptSearchBar = () => {
    const languageSelected = useSelector(state => state.config.lang);

    return (
        <div className="pt-[5%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
                <input
                    type="text"
                    placeholder={lang[languageSelected].gptSearchPlaceholder}
                    className="p-6 m-4 col-span-9 text-lg rounded-lg"
                />
                <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3">
                    {lang[languageSelected].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;