import React from 'react';
import classes from "../../scss/FinishPage.module.scss"

interface FinishPageProps {

}

const FinishPage: React.FC<FinishPageProps> = () => {
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