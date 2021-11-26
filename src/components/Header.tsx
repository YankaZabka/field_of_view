import React from 'react';
import classes from "./Header.module.scss";
import {FormattedMessage} from "react-intl";

interface HeaderProps {
    isTitle: boolean
}

const Header = ({isTitle}: HeaderProps) => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.image} style={{background: "none"}}/>
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