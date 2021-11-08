import React from 'react';
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.image} style={{background: "none"}}/>
                <div className={classes.title}>
                    <h1>Тренажер "Поле зрения"</h1>
                </div>
                <div className={classes.image}/>
            </div>
        </div>
    );
};

export default Header;