import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addTrendingMovies} from "../slices/moviesSlice";
import {useEffect} from "react";

const useTrendingMovies = () => {

    const dispatch = useDispatch();

    const trendingMovies = useSelector(state => state.movies.trendingMovies);

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        !trendingMovies && getTrendingMovies();
    }, []);
}

export default useTrendingMovies;