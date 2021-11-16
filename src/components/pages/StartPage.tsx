import React, {useState} from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/WordsAmountCard";
import SpeedCard from "../controls/SpeedCard";
import StartButton from "../controls/StartButton";
import StartDistanceCard from "../controls/StartDistanceCard";
import LettersAmountCard from "../controls/LettersAmountCard";
import IncreasingDistanceCard from "../controls/IncreasingDistanceCard";

const StartPage = () => {
    const [numberOfWords, setNumberOfWords] = useState<number>()
    const [startingDistance, setStartingDistance] = useState<number>()
    const [lettersInWords, setLettersInWords] = useState<number>()
    const [increasingDistance, setIncreasingDistance] = useState<number>()
    const [speed, setSpeed] = useState<number>(1)

    return (
        <div className={classes.startPage}>
            <WordsAmountCard handleNumberOfWords={value => setNumberOfWords(value)}/>
            <StartDistanceCard handleStartingDistance={value => setStartingDistance(value)}/>
            <LettersAmountCard handleLettersInWords={value => setLettersInWords(value)}/>
            <IncreasingDistanceCard handleIncreasingDistance={value => setIncreasingDistance(value)}/>
            <SpeedCard handleSpeed={value => setSpeed(value)}/>
            <StartButton/>
        </div>
    );
};

export default StartPage;