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

const DEFAULT_LOCALE = LOCALE.RUSSIAN

const REFRESH_TIME = 3000

const App = () => {
    const [options, setOptions] = useState<IOptions | undefined>()
    const [step, setStep] = useState<Step>(Step.Settings)
    const [currentLocale, setCurrentLocale] = useState(DEFAULT_LOCALE)

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={DEFAULT_LOCALE}>
            <div className={classes.App}>
                <Header
                    isTitle={step === Step.Settings}
                    currentLocale={currentLocale}
                    onLocaleChange={(value) => setCurrentLocale(value)}
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