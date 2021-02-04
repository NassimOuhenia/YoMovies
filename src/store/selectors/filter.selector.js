import {findCategoriesInMovies, updateFilter} from "../helpers/filter.helper";

const filterSelector = ({movies, filter}) => {
    return updateFilter(findCategoriesInMovies(movies), filter);
}

export {filterSelector};
