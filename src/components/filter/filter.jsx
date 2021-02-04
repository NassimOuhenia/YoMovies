import React, {useState} from "react";
import './filter.scss';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {filterMoviesAction} from "../../store/actions/filter.action";
import filteredCategories from "../../store/selectors/filter.selector";
import {resetPageNumberAction} from "../../store/actions/pagination.action";

export const Filter = ({value, categories, onChange, resetPageNumber}) => {

        const [toggleBtnFilter, setToggleBtnFilter] = useState(false)

        const renderCategories = () =>
            <div className={`container mt-1 categories ${toggleBtnFilter ? 'active' : ''}`}>
                {categories.map((category, index) => {
                    return (
                        <Button
                            key={index}
                            variant={"outline-primary"}
                            className={'m-1'}
                            active={value.includes(category)}
                            onClick={() => {
                                onChange(category);
                                resetPageNumber();
                            }}
                        >
                            {category}
                        </Button>
                    )
                })}
            </div>

        const renderToggleButton = () => {
            const active = toggleBtnFilter ? 'active' : '';
            return (
                <button
                    className={`m-auto btn-filter ${active}`}
                    onClick={() => setToggleBtnFilter(!toggleBtnFilter)}
                    title={'Filter !'}
                >
                    <span className={'bar bar--1'}/>
                    <span className={'bar bar--2'}/>
                </button>
            )
        }

        return categories.length > 1 && (
            <div className={'container d-flex justify-content-center'}>
                {renderToggleButton()}
                {renderCategories()}
            </div>
        );
    }
;

const mapStateToProps = (state) => ({
    value: state.filter,
    categories: filteredCategories(state)
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch(filterMoviesAction(value)),
    resetPageNumber: () => dispatch(resetPageNumberAction())
});

export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
