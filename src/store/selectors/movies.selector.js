import {filteredMovies} from "../helpers/movies.helper";
import {findPagination} from "../helpers/pagination.helper";

const moviesSelector = ({movies, filter, pageNumber}) => {

    let filtered = filteredMovies(movies, filter);

    filtered = filtered.length ? filtered : movies;

    const {offset, limit} = findPagination(filtered, pageNumber);
    return filtered.slice(offset, limit);
}

export default moviesSelector;
