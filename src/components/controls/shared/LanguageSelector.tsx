import React from 'react';
import classes from "./LanguageSelector.module.scss"
import {LOCALE} from "../../../i18n/locales";
import {FormattedMessage} from "react-intl";

interface LanguageSelectorProps {
    currentLocale: string

    onLocaleChange(value: string): void
}

const LanguageSelector = ({currentLocale, onLocaleChange}: LanguageSelectorProps) => {

    const languages = [
        {name: 'ENG', code: LOCALE.ENGLISH},
        {name: 'RU', code: LOCALE.RUSSIAN},
    ]

    return (
        <div className={classes.switcher}>
            <p>
                <FormattedMessage id="languages"/>
            </p>
            <select onChange={(e) => onLocaleChange(e.target.value)} value={currentLocale}>
                {languages.map(({name, code}) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;