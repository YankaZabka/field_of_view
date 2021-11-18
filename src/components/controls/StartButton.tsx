import React from 'react';
import classes from "./StartButton.module.scss"

interface StartButtonProps {
    handleClick(): void
}

const StartButton = ({handleClick}: StartButtonProps) => {
    return (
        <div className={classes.card}>
            <button onClick={handleClick} className={classes.button}>СТАРТ</button>
        </div>
    );
};

export default StartButton;