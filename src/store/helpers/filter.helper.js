

const findCategoriesInMovies = (movies) => {
    let categoriesSet = new Set();
    movies.length && movies.forEach(movie => categoriesSet.add(movie.category));
    return [...categoriesSet];
}

const updateFilter = (categories, filter) => {
    let filters = [];
    filter.forEach((f) => {
        if (categories.includes(f)) {
            filters.push(f);
        }
    });
    return filters;
}

export {findCategoriesInMovies, updateFilter};
