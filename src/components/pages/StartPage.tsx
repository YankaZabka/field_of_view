import React from 'react';
import classes from "../../scss/StartPage.module.scss"
import WordsAmountCard from "../WordsAmountCard";
import SpeedCard from "../SpeedCard";
import StartCard from "../StartCard";

interface StartPageProps {

}

const StartPage: React.FC<StartPageProps> = () => {
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