import React from 'react';
import classes from "./FinishPage.module.scss"

interface FinishPageProps {
    refreshTime: number
    onFinish(): void
}

const FinishPage = ({onFinish, refreshTime}: FinishPageProps) => {

    setTimeout(() => onFinish(), refreshTime)

    return (
        <div className={classes.page}>
            <div className={classes.image}/>
            <div className={classes.title}>
                Отличная работа!
            </div>
        </div>
    );
};

export default FinishPage;