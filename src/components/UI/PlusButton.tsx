import React from 'react';
import classes from "../../scss/PlusButton.module.scss"

interface PlusButtonProps {
}

const PlusButton: React.FC<PlusButtonProps> = () => {
    return (
        <button className={classes.button}>
            <div className={classes.horizontalRect}/>
            <div className={classes.verticalRect}/>
        </button>
    );
};

export default PlusButton;