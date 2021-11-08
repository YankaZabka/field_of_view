import React from 'react';
import classes from "../../scss/FinishPage.module.scss"

const FinishPage = () => {
    return (
        <div className={classes.page}>
            <div className={classes.image}/>
            <div className={classes.title}>
                Отличная работа!
            </div>
        </div>
    );
};

export default FinishPage;