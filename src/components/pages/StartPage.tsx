import React, {useState} from 'react';
import classes from "./StartPage.module.scss"
import WordsAmountCard from "../controls/WordsAmountCard";
import SpeedCard from "../controls/SpeedCard";
import StartButton from "../controls/StartButton";
import StartDistanceCard from "../controls/StartDistanceCard";
import LettersAmountCard from "../controls/LettersAmountCard";
import IncreasingDistanceCard from "../controls/IncreasingDistanceCard";
import {IOptions} from "../../interfaces/options";

interface StartPageProps {
    onStart(value: IOptions): void
}

const StartPage = ({onStart}: StartPageProps) => {
    const [numberOfWords, setNumberOfWords] = useState(5)
    const [startingDistance, setStartingDistance] = useState(20)
    const [lettersInWords, setLettersInWords] = useState(7)
    const [increasingDistance, setIncreasingDistance] = useState(20)
    const [speed, setSpeed] = useState(1)

    return (
        <div className={classes.startPage}>
            <WordsAmountCard value={numberOfWords} handleNumberOfWords={value => setNumberOfWords(value)}/>
            <StartDistanceCard value={startingDistance} handleStartingDistance={value => setStartingDistance(value)}/>
            <LettersAmountCard value={lettersInWords} handleLettersInWords={value => setLettersInWords(value)}/>
            <IncreasingDistanceCard value={increasingDistance} handleIncreasingDistance={value => setIncreasingDistance(value)}/>
            <SpeedCard value={speed} handleSpeed={value => setSpeed(value)}/>
            <StartButton handleClick={() => {
                onStart({numberOfWords, startingDistance, lettersInWords, increasingDistance, speed})
            }}/>
        </div>
    );
};

export default StartPage;