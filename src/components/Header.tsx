import React from 'react';
import classes from "./Header.module.scss";
import {FormattedMessage} from "react-intl";
import LanguageSelector from "./controls/shared/LanguageSelector";

interface HeaderProps {
    isTitle: boolean
    currentLocale: string
    onLocaleChange(value: string): void
}

const Header = ({isTitle, currentLocale, onLocaleChange}: HeaderProps) => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <LanguageSelector
                    currentLocale={currentLocale}
                    onLocaleChange={(value) => onLocaleChange(value)}
                />
                <div className={isTitle ? classes.title : classes.title + " " + classes.noneTitle}>
                    <h1>
                        <FormattedMessage id="title"/>
                    </h1>
                </div>
                <div className={classes.image}/>
            </div>
        </div>
    );
};

export default Header;