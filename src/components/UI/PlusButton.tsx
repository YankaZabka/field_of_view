import React from 'react';
import classes from "../../scss/PlusButton.module.scss"

const PlusButton = () => {
    return (
        <button className={classes.button}>
            <div className={classes.horizontalRect}/>
            <div className={classes.verticalRect}/>
        </button>
    );
};

export default PlusButton;