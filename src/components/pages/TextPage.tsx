import React from 'react';
import classes from "../../scss/TextPage.module.scss"

interface TextPageProps {

}

const TextPage: React.FC<TextPageProps> = () => {
    return (
        <div className={classes.page}>
            <div className={classes.leftPart}>разв</div>
            <div className={classes.tilde}/>
            <div className={classes.rightPart}>итие</div>
        </div>
    );
};

export default TextPage;