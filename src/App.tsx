import React, {useState} from 'react';
import classes from "./App.module.scss";
import Header from "./components/Header";
import StartPage from "./components/pages/StartPage";
import {IOptions} from "./interfaces/options";
import GamePage from "./components/pages/GamePage";
import FinishPage from "./components/pages/FinishPage";
import {IntlProvider} from "react-intl";
import {LOCALE} from "./i18n/locales";
import {messages} from "./i18n/messages";

enum Step {Settings, Game, End}

const DEFAULT_LOCALE = LOCALE.ENGLISH

const REFRESH_TIME = 3000

const App = () => {
    const [options, setOptions] = useState<IOptions | undefined>()
    const [step, setStep] = useState<Step>(Step.Settings)

    return (
        <IntlProvider messages={messages[DEFAULT_LOCALE]} locale={DEFAULT_LOCALE} defaultLocale={LOCALE.RUSSIAN}>
            <div className={classes.App}>
                <Header
                    isTitle={step === Step.Settings}
                />
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
                            onEnd={() => {
                                setStep(Step.End)
                                setTimeout(() => setStep(Step.Settings), REFRESH_TIME)
                            }}
                        />
                        : <FinishPage/>
                }
            </div>
        </IntlProvider>
    );
}

export default App;