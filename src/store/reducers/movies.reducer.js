import {Types} from '../actions/movies.action'
import {dislikeMovie, likeMovie} from "../helpers/movies.helper";

const defaultState = [];

const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.SAVE_MOVIES: {
            return [...action.movies];
        }
        case Types.DELETE_MOVIE: {
            return state.filter(movie => movie.id !== action.movieId);
        }
        case Types.DISLIKE_MOVIE: {
            return dislikeMovie(state, action);
        }
        case Types.LIKE_MOVIE: {
            return likeMovie(state, action);
        }
        default: {
            return state
        }
    }
}

export default moviesReducer;
