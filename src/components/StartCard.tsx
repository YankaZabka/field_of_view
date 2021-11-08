import React from 'react';
import classes from "../scss/StartCard.module.scss"

const StartCard = () => {
    return (
        <div className={classes.card}>
            <button className={classes.button}>СТАРТ</button>
        </div>
    );
};

export default StartCard;