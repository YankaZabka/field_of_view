import React from 'react';
import classes from "../scss/StartCard.module.scss"

interface StartCardProps {

}

const StartCard: React.FC<StartCardProps> = () => {
    return (
        <div className={classes.card}>
            <button className={classes.button}>СТАРТ</button>
        </div>
    );
};

export default StartCard;