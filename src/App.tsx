import React from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";

const App = () => {
    return (
        <div className={classes.App}>
            <Header/>
            <StartPage/>
        </div>
    );
}

export default App;