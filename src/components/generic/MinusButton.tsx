import React from 'react';
import classes from "./MinusButton.module.scss"

interface MinusButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const MinusButton = ({onClick}: MinusButtonProps) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <div className={classes.horizontalRect}/>
        </button>
    );
};

export default MinusButton;