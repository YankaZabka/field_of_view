import React from 'react';
import classes from "./scss/App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className={classes.App}>
        <Header/>
        <StartPage/>
    </div>
  );
}

export default App;
