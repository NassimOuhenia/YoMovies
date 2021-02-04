class Types {
    static FILTER_MOVIES = 'FILTER_MOVIES';
}

const filterMoviesAction = (category) => {
    return {
        type: Types.FILTER_MOVIES,
        category,
    }
}


export {Types, filterMoviesAction};
