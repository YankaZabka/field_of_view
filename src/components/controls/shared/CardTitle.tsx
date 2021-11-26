import React from 'react';
import classes from "./CardTitle.module.scss"
import {FormattedMessage} from "react-intl";

interface CardTitleProps {
    text: string,
}

const CardTitle: React.FC<CardTitleProps> = ({text}) => {
    return (
        <h2 className={classes.title}>
            <FormattedMessage id={text}/>
        </h2>
    );
};

export default CardTitle;