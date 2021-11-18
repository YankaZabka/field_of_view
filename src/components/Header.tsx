import React from 'react';
import classes from "./Header.module.scss";

interface HeaderProps {
    isTitle: any
}

const Header = ({isTitle}: HeaderProps) => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.image} style={{background: "none"}}/>
                <div className={isTitle ? classes.title : classes.title + " " + classes.noneTitle}>
                    <h1>Тренажер "Поле зрения"</h1>
                </div>
                <div className={classes.image}/>
            </div>
        </div>
    );
};

export default Header;