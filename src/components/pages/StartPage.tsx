import React from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/cards/WordsAmountCard";
import SpeedCard from "../controls/cards/SpeedCard";
import StartCard from "../controls/cards/StartCard";

interface StartPageProps {

    handleSpeed(value: number): void

    handleIncreasingDistance(value: number): void

    handleLettersInWords(value: number): void

    handleStartingDistance(value: number): void

    handleNumberOfWords(value: number): void
}

const StartPage = ({handleSpeed, handleIncreasingDistance, handleNumberOfWords, handleLettersInWords, handleStartingDistance}: StartPageProps) => {
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