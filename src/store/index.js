import {combineReducers, createStore} from 'redux'
import moviesReducer from "./reducers/movies.reducer";
import filterReducer from "./reducers/filter.reducer";
import paginationReducer from "./reducers/pagination.reducer";

const store = createStore(
    combineReducers({
        movies: moviesReducer,
        filter: filterReducer,
        pageNumber: paginationReducer,
    })
)

export default store;


