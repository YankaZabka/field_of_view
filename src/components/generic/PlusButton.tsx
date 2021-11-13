import React from 'react';
import classes from "./PlusButton.module.scss"

interface PlusButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PlusButton = ({onClick}: PlusButtonProps) => {
    return (
        <button onClick={onClick} className={classes.button}>
            <div className={classes.horizontalRect}/>
            <div className={classes.verticalRect}/>
        </button>
    );
};

export default PlusButton;