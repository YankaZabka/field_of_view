import React from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/cards/WordsAmountCard";
import SpeedCard from "../controls/cards/SpeedCard";
import StartCard from "../controls/cards/StartCard";

const StartPage = () => {
    return (
        <div className={classes.startPage}>
            <WordsAmountCard/>
            <WordsAmountCard/>
            <WordsAmountCard/>
            <WordsAmountCard/>
            <SpeedCard/>
            <StartCard/>
        </div>
    );
};

export default StartPage;