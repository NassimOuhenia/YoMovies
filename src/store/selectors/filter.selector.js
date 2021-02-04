
const filteredCategories = ({movies}) => {
    let categoriesSet = new Set();
    movies.length && movies.forEach(movie => categoriesSet.add(movie.category));
    return [...categoriesSet];
}

export default filteredCategories;
