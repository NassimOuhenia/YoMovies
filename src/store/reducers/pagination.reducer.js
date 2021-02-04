import {Types} from '../actions/pagination.action'

const paginationReducer = (state = 0, action) => {
    switch (action.type) {
        case Types.UPDATE_PAGE_NUMBER: {
            return action.pageNumber;
        }
        case Types.RESET_PAGE_NUMBER: {
            return 0;
        }
        default: {
            return state
        }
    }
}

export default paginationReducer;
