import React from 'react';
import classes from "./FinishPage.module.scss"
import {FormattedMessage} from "react-intl";

const FinishPage = () => {

    return (
        <div className={classes.page}>
            <div className={classes.image}/>
            <div className={classes.title}>
                <FormattedMessage id="finish"/>
            </div>
        </div>
    );
};

export default FinishPage;