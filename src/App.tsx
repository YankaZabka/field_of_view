import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";
import {IOptions} from "./interfaces/options";
import TextPage from "./components/pages/TextPage";
import FinishPage from "./components/pages/FinishPage";

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
            {currentPage === 1
                ? <StartPage
                    handleOptions={value => setOptions(value)}
                    handlePage={() => setCurrentPage(prev => prev + 1)}
                />
                : currentPage === 2
                    ? <TextPage/>
                    : <FinishPage/>
            }
        </div>
    );
}

export default App;