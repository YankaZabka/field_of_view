import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";
import {IOptions} from "./interfaces/options";
import GamePage from "./components/pages/GamePage";
import FinishPage from "./components/pages/FinishPage";

enum Step {Settings, Game, End}

const App = () => {
    const [options, setOptions] = useState<IOptions | undefined>()
    const [step, setStep] = useState<Step>(Step.Settings)

    return (
        <div className={classes.App}>
            <Header isTitle={step === Step.Settings}/>
            {step === Step.Settings
                ? <StartPage
                    onStart={options => {
                        setOptions(options)
                        setStep(Step.Game)
                    }}
                />
                : step === Step.Game && options
                    ? <GamePage
                        options={options}
                        onEnd={() => setStep(Step.End)}
                    />
                    : <FinishPage/>
            }
        </div>
    );
}

export default App;