import {findPagination} from "../helpers/pagination.helper";
import {filteredMovies} from "../helpers/movies.helper";
import {findCategoriesInMovies, updateFilter} from "../helpers/filter.helper";

const paginationSelector = ({movies, filter, pageNumber}) => {
    return findPagination(
        filteredMovies(
            movies,
            updateFilter(
                findCategoriesInMovies(movies),
                filter)
        )
        , pageNumber);
}

export default paginationSelector;
