import React from "react";
import {Spinner} from "react-bootstrap";
import './spinner.component.scss';

const SpinnerComponent = () => {
    return (
        <Spinner animation={'border'} className={'spinner'}/>
    );
};

export {SpinnerComponent};
