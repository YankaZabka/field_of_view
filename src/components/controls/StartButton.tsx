import React from 'react';
import classes from "./StartButton.module.scss"

interface StartButtonProps {
    onStart(): void
}

const StartButton = ({onStart}: StartButtonProps) => {
    return (
        <div className={classes.card}>
            <button onClick={onStart} className={classes.button}>СТАРТ</button>
        </div>
    );
};

export default StartButton;