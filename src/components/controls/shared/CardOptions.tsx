import React from 'react';
import classes from "./CardOptions.module.scss"

interface CardOptionsProps {
    options: number[]
}

const CardOptions = ({options}: CardOptionsProps) => {

    return (
        <div className={classes.options}>
            {options.map(number => {
                return <div
                    key={number}
                    className={classes.option}
                >
                    {number}
                </div>
            })}
        </div>
    );
};

export default CardOptions;