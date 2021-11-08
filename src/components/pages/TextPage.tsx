import React from 'react';
import classes from "./TextPage.module.scss"

const TextPage = () => {
    return (
        <div className={classes.page}>
            <div className={classes.leftPart}>разв</div>
            <div className={classes.tilde}/>
            <div className={classes.rightPart}>итие</div>
        </div>
    );
};

export default TextPage;