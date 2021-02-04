class Types {
    static UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
    static RESET_PAGE_NUMBER = 'RESET_PAGE_NUMBER';
}

const updatePageNumberAction = (pageNumber) => {
    return {
        type: Types.UPDATE_PAGE_NUMBER,
        pageNumber,
    }
};

const resetPageNumberAction = () => {
    return {
        type: Types.RESET_PAGE_NUMBER,
    }
};

export {Types, updatePageNumberAction, resetPageNumberAction};
