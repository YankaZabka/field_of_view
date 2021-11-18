import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";
import {IOptions} from "./interfaces/options";
import TextPage from "./components/pages/TextPage";
import FinishPage from "./components/pages/FinishPage";

enum Step {Settings, Game, End}

const App = () => {
    const [options, setOptions] = useState<IOptions | null>()
    const [step, setStep] = useState<Step>(Step.Settings)

    return (
        <div className={classes.App}>
            <Header isTitle={step === 0}/>
            {step === 0
                ? <StartPage
                    onStart={options => {
                        setOptions(options)
                        setStep(Step.Game)
                    }}
                />
                : step === 1
                    ? <TextPage/>
                    : <FinishPage/>
            }
        </div>
    );
}

export default App;