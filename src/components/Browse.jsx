import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./gptComp/GptSearch";
import {useSelector} from "react-redux";

const Browse = () => {
    const toggleGpt = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {
                toggleGpt ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            }
        </div>
    );
};

export default Browse;