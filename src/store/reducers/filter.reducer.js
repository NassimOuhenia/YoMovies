import {Types} from "../actions/filter.action";

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case Types.FILTER_MOVIES: {
            return action.category ?
                state.includes(action.category) ?
                    state.filter((category) => category !== action.category)
                    : [...state, action.category]
                : [];
        }
        default: {
            return state
        }
    }
}

export default moviesReducer;
