import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";
import {IOptions} from "./interfaces/options";

const App = () => {
    const [options, setOptions] = useState<IOptions>({
        numberOfWords: 5,
        startingDistance: 20,
        lettersInWords: 7,
        increasingDistance: 20,
        speed: 1,
    })
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className={classes.App}>
            <Header/>
            <StartPage/>
        </div>
    );
}

export default App;