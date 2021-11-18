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
            <WordsAmountCard value={numberOfWords} onChange={value => setNumberOfWords(value)}/>
            <StartDistanceCard value={startingDistance} onChange={value => setStartingDistance(value)}/>
            <LettersAmountCard value={lettersInWords} onChange={value => setLettersInWords(value)}/>
            <IncreasingDistanceCard value={increasingDistance} onChange={value => setIncreasingDistance(value)}/>
            <SpeedCard value={speed} onChange={value => setSpeed(value)}/>
            <StartButton onStart={() => {
                onStart({numberOfWords, startingDistance, lettersInWords, increasingDistance, speed})
            }}/>
        </div>
    );
};

export default StartPage;