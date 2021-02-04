import {filteredMovies} from "../helpers/movies.helper";
import {findPagination} from "../helpers/pagination.helper";
import {findCategoriesInMovies, updateFilter} from "../helpers/filter.helper";

const moviesSelector = ({movies, filter, pageNumber}) => {

    let filtered = filteredMovies(movies, updateFilter(findCategoriesInMovies(movies), filter));

    const {offset, limit} = findPagination(filtered, pageNumber);
    return filtered.slice(offset, limit);
}

export default moviesSelector;
