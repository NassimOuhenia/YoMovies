import {findPagination} from "../helpers/pagination.helper";
import {filteredMovies} from "../helpers/movies.helper";

const paginationSelector = ({movies, filter, pageNumber}) => {
    return findPagination(filteredMovies(movies, filter), pageNumber);
}

export default paginationSelector;
