import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {changeSelectedMovie} from "../slices/moviesSlice";
import {useEffect} from "react";

const useSelectedMovie = () => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.movies.selectedMovie);

    // const getSelectedMovie = async () => {
    //     const data = await fetch('https://api.themoviedb.org/3/movie/'+
    //         selected
    //         +'?language=en-US', API_OPTIONS);
    //     const json = await data.json();
    //     console.log(json)
    //     dispatch(changeSelectedMovie(json));
    // }
    //
    // useEffect(() => {
    //     !selected && getSelectedMovie();
    // }, []);
}

export default useSelectedMovie;