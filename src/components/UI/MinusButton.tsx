import React from 'react';
import classes from "../../scss/MinusButton.module.scss"

const MinusButton = () => {
    return (
        <button className={classes.button}>
            <div className={classes.horizontalRect}/>
        </button>
    );
};

export default MinusButton;