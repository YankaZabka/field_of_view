import React from 'react';
import classes from "./CardTitle.module.scss"

interface CardTitleProps {
    text: string,
}

const CardTitle: React.FC<CardTitleProps> = ({text}) => {
    return (
        <h2 className={classes.title}>
            {text}
        </h2>
    );
};

export default CardTitle;