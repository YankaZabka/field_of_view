import React from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import CardTitle from "../CardTitle";
import classes from './SpeedCard.module.scss'
import MinusButton from "../../generic/MinusButton";
import PlusButton from "../../generic/PlusButton";

const SpeedCard = () => {
    return (
        <SettingCardTemplate>
            <div className={classes.header}>
                <CardTitle text={"Скорость"}/>
                <div className={classes.header__counter}>
                    <div className={classes.counter}>
                        1
                    </div>
                    <CardTitle text={"сек."}/>
                </div>
            </div>
            <div>
                <MinusButton/>
                <PlusButton/>
            </div>
        </SettingCardTemplate>
    );
};

export default SpeedCard;