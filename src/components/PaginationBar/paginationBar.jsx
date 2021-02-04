import React from "react";
import Pagination from "react-bootstrap/Pagination";
import {connect} from "react-redux";
import {updatePageNumberAction} from "../../store/actions/pagination.action";
import paginationSelector from "../../store/selectors/pagination.selector";

export const PaginationBar = (props) => {
    const {pagination, updatePageNumber} = props;
    const {pageNumber, totalPage} = pagination;
    return totalPage > 0 && (
        <Pagination className={'justify-content-center mt-2'}>
            {pageNumber >= 2 && <Pagination.First onClick={() => updatePageNumber(0)}/>}

            {pageNumber >= 1 && (
                <Pagination.Prev onClick={() => updatePageNumber(pageNumber - 1)}/>
            )}

            {pageNumber >= 2 && <Pagination.Ellipsis disabled/>}

            {pageNumber !== 0 && (
                <Pagination.Item onClick={() => updatePageNumber(pageNumber - 1)}>
                    {pageNumber}
                </Pagination.Item>
            )}

            <Pagination.Item active>{pageNumber + 1}</Pagination.Item>

            {pageNumber !== totalPage - 1 && (
                <Pagination.Item onClick={() => updatePageNumber(pageNumber + 1)}>
                    {pageNumber + 2}
                </Pagination.Item>
            )}

            {pageNumber <= totalPage - 3 && <Pagination.Ellipsis disabled/>}

            {pageNumber <= totalPage - 2 && (
                <Pagination.Next onClick={() => updatePageNumber(pageNumber + 1)}/>
            )}

            {pageNumber <= totalPage - 3 && (
                <Pagination.Last onClick={() => updatePageNumber(totalPage - 1)}/>
            )}
        </Pagination>
    )

}

const mapStateToProps = (state) => ({
    pagination: paginationSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    updatePageNumber: (pageNumber) => dispatch(updatePageNumberAction(pageNumber)),
});

export const PaginationBarContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationBar);

