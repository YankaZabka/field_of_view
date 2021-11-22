import React from 'react';
import classes from "./TextPage.module.scss"
import {IOptions} from "../../interfaces/options";

interface TextPageProps {
    options: IOptions | undefined
    onEnd(): void
}

const TextPage = ({options, onEnd}: TextPageProps) => {
    return (
        <div className={classes.page}>
            <div className={classes.leftPart}>разв</div>
            <div className={classes.tilde}/>
            <div className={classes.rightPart}>итие</div>
        </div>
    );
};

export default TextPage;