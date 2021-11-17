import React, {useState} from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/WordsAmountCard";
import SpeedCard from "../controls/SpeedCard";
import StartButton from "../controls/StartButton";
import StartDistanceCard from "../controls/StartDistanceCard";
import LettersAmountCard from "../controls/LettersAmountCard";
import IncreasingDistanceCard from "../controls/IncreasingDistanceCard";

const StartPage = () => {
    const [numberOfWords, setNumberOfWords] = useState(10)
    const [startingDistance, setStartingDistance] = useState(40)
    const [lettersInWords, setLettersInWords] = useState(12)
    const [increasingDistance, setIncreasingDistance] = useState(40)
    const [speed, setSpeed] = useState(1)

    return (
        <div className={classes.startPage}>
            <WordsAmountCard value={numberOfWords} handleNumberOfWords={value => setNumberOfWords(value)}/>
            <StartDistanceCard value={startingDistance} handleStartingDistance={value => setStartingDistance(value)}/>
            <LettersAmountCard value={lettersInWords} handleLettersInWords={value => setLettersInWords(value)}/>
            <IncreasingDistanceCard value={increasingDistance} handleIncreasingDistance={value => setIncreasingDistance(value)}/>
            <SpeedCard value={speed} handleSpeed={value => setSpeed(value)}/>
            <StartButton/>
        </div>
    );
};

export default StartPage;