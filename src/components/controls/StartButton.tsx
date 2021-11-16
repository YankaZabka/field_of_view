import React from 'react';
import classes from "./StartButton.module.scss"

const StartButton = () => {
    return (
        <div className={classes.card}>
            <button className={classes.button}>СТАРТ</button>
        </div>
    );
};

export default StartButton;