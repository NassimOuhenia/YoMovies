import {PER_PAGE} from "../../config";

const findPagination = (movies, pageNumber = 0, limit = PER_PAGE) => {

    const remaining = movies.length % limit === 0 ? 0 : 1;
    const totalPage = Math.floor(movies.length / limit) + remaining;

    pageNumber = totalPage <= 1 ? 0 : totalPage <= pageNumber ? pageNumber - 1 : pageNumber;

    const offset = limit * pageNumber;
    limit += offset;

    return {pageNumber, offset, limit, totalPage};
};

export {findPagination};
