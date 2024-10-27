import {useDispatch, useSelector} from "react-redux";
import {API_OPTIONS} from "../utils/constants";
import {addTrailerVideo} from "../slices/moviesSlice";
import {useEffect} from "react";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(state => state.trailerVideo);

    const getMovieVideos = async (movieId) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterVideos = json.results.filter(elem => elem.type === "Trailer");
        const trailer = filterVideos ? filterVideos[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieVideos(movieId)
    }, []);
}

export default useTrailerVideo;