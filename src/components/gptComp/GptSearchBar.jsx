import React, {useRef} from 'react';
import lang from "../../utils/languageConstants";
import {useDispatch, useSelector} from "react-redux";
import client from "../../utils/openAI";
import {API_OPTIONS, GEMINI_KEY, supportedAI} from "../../utils/constants";
import {addGptMovieResult} from "../../slices/gptSlice";
import {GoogleGenerativeAI} from "@google/generative-ai";
import {changeAI, changeMovieNumber} from "../../slices/appConfigSlice";
import numberOfMovies from "../../utils/numberOfMovieConstant";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const languageSelected = useSelector(state => state.config.lang);
    const movieNumber = useSelector(state => state.config.movieNumber);
    const gptType = useSelector(state =>state.config.ai)

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+
            movie+'&include_adult=false&language=en-US&page=1',
            API_OPTIONS);

        const json = await data.json();
        return json.results;
    }

    const handleSearchClick = async () => {
        if (gptType === "gemini") {
            // Gemini
            const genAI = new GoogleGenerativeAI(GEMINI_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = "Act as a Movie Recommendation System and suggest some movies for the query : " +
                searchText.current.value
                + ". give me names of only"+ movieNumber +"movies, comma separated";

            const result = await model.generateContent(prompt);
            const geminiMovies = result.response.candidates[0].content.parts[0].text.split(",");
            const promiseArray = geminiMovies.map(movie => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGptMovieResult({movieResults: tmdbResults, movieNames: geminiMovies}));

        } else {
            // Open AI
            const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " +
                searchText.current.value
                + ". give me names of only"+ movieNumber +"movies, comma separated";

            const gptResults = await client.chat.completions.create({
                messages: [{ role: 'user', content: searchText.current.value }],
                model: 'gpt-3.5-turbo',
            })

            const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

            const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);
            dispatch(addGptMovieResult(tmdbResults));
        }
    }

    const handleAiChange = (e) => {
        dispatch(changeAI(e.target.value));
    }

    const handleMovieNumber = (e) => {
        dispatch(changeMovieNumber(e.target.value));
    }

    return (
        <div className="pt-[40%] md:pt-[5%] flex justify-center">
            <form
                className="w-full bg-black md:w-1/2 flex flex-col md:grid md:grid-cols-12 rounded-lg"
                onSubmit={e => {e.preventDefault()}}
            >
                <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[languageSelected].gptSearchPlaceholder}
                    className="p-6 m-4 col-span-6 text-lg rounded-lg"
                />
                <select
                    className="py-2 px-4 m-4 bg-red-600 text-lg text-center text-white font-bold rounded-md col-span-2"
                    onChange={handleAiChange}
                >
                    {
                        supportedAI.map(ai => (
                            <option
                                key={ai.identifier}
                                value={ai.identifier}
                                className="hover:bg-amber-200"
                            >{ai.name}</option>
                        ))
                    }
                </select>
                <select
                    className="py-2 px-4 m-4 bg-red-600 text-lg text-center text-white font-bold rounded-md col-span-2"
                    onChange={handleMovieNumber}
                >
                    {
                        numberOfMovies.map(movie => (
                            <option
                                key={movie.identifier}
                                value={movie.value}
                            >
                                {movie.value}
                            </option>
                        ))
                    }
                </select>
                <button
                    className="py-2 px-4 m-4 bg-red-600 text-white text-center font-bold text-lg rounded-lg col-span-2"
                    onClick={handleSearchClick}
                >
                    {lang[languageSelected].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
