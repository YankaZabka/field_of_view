import React from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/cards/WordsAmountCard";
import SpeedCard from "../controls/cards/SpeedCard";
import StartCard from "../controls/cards/StartCard";
import StartDistanceCard from "../controls/cards/StartDistanceCard";
import LettersAmountCard from "../controls/cards/LettersAmountCard";
import IncreasingDistanceCard from "../controls/cards/IncreasingDistanceCard";

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
            <WordsAmountCard handleNumberOfWords={handleNumberOfWords}/>
            <StartDistanceCard handleStartingDistance={handleStartingDistance}/>
            <LettersAmountCard handleLettersInWords={handleLettersInWords}/>
            <IncreasingDistanceCard handleIncreasingDistance={handleIncreasingDistance}/>
            <SpeedCard handleSpeed={handleSpeed}/>
            <StartCard/>
        </div>
    );
};

export default StartPage;