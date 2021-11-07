import React from 'react';
import classes from "../../scss/MinusButton.module.scss"

interface MinusButtonProps {
}

const MinusButton: React.FC<MinusButtonProps> = () => {
    return (
        <button className={classes.button}>
            <div className={classes.horizontalRect}/>
        </button>
    );
};

export default MinusButton;