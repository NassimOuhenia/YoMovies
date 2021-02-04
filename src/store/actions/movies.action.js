class Types {
    static SAVE_MOVIES = 'SAVE_MOVIES';
    static DELETE_MOVIE = 'DELETE_MOVIE';
    static LIKE_MOVIE = 'LIKE_MOVIE';
    static DISLIKE_MOVIE = 'DISLIKE_MOVIE';
}

const saveMoviesAction = (movies) => {
    return {
        type: Types.SAVE_MOVIES,
        movies,
    }
}

const deleteMovieAction = (movieId) => {
    return {
        type: Types.DELETE_MOVIE,
        movieId,
    }
}

const likeMovieAction = (movieId) => {
    return {
        type: Types.LIKE_MOVIE,
        movieId,
    }
}

const dislikeMovieAction = (movieId) => {
    return {
        type: Types.DISLIKE_MOVIE,
        movieId,
    }
}

export {Types, saveMoviesAction, deleteMovieAction, likeMovieAction, dislikeMovieAction};
