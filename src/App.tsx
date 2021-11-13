import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";

const App = () => {
    const [numberOfWords, setNumberOfWords] = useState<number>(6)
    const [startingDistance, setStartingDistance] = useState<number>(25)
    const [lettersInWords, setLettersInWords] = useState<number>(8)
    const [increasingDistance, setIncreasingDistance] = useState<number>(25)
    const [speed, setSpeed] = useState<number>(1)

    const changeSpeed = (value: number): void => {
        setSpeed(value)
    }

    const changeIncreasingDistance = (value: number): void => {
        setIncreasingDistance(value)
    }

    const changeLettersInWords = (value: number): void => {
        setLettersInWords(value)
    }

    const changeStartingDistance = (value: number): void => {
        setStartingDistance(value)
    }

    const changeNumberOfWords = (value: number): void => {
        setNumberOfWords(value)
    }

    return (
        <div className={classes.App}>
            <Header/>
            <StartPage
                handleSpeed={changeSpeed}
                handleIncreasingDistance={changeIncreasingDistance}
                handleLettersInWords={changeLettersInWords}
                handleStartingDistance={changeStartingDistance}
                handleNumberOfWords={changeNumberOfWords}
            />
        </div>
    );
}

export default App;
