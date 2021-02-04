const likeMovie = (state, action) => {
    return state.map(movie => {
        if (movie.id === action.movieId) {
            return {
                ...movie,
                likes: movie.likes + (movie.liked ? -1 : 1),
                dislikes: movie.dislikes - (movie.disliked ? 1 : 0),
                liked: !movie.liked,
                disliked: false
            }
        } else {
            return movie;
        }
    })
}

const dislikeMovie = (state, action) => {
    return state.map(movie => {
        if (movie.id === action.movieId) {
            return {
                ...movie,
                likes: movie.likes - (movie.liked ? 1 : 0),
                dislikes: movie.dislikes + (movie.disliked ? -1 : 1),
                disliked: !movie.disliked,
                liked: false
            }
        } else {
            return movie;
        }
    })
}

const filteredMovies = (movies, filter) => {
    if (filter.length) {
        let filteredMovies = [];
        filter.forEach(category =>
            filteredMovies = [...filteredMovies, ...movies.filter((movie) => movie.category === category)]
        );
        return filteredMovies;
    } else {
        return movies;
    }
}

export {likeMovie, dislikeMovie, filteredMovies};
