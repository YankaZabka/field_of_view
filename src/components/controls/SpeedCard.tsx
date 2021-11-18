import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import CardTitle from "./shared/CardTitle";
import classes from './SpeedCard.module.scss'
import MinusButton from "./shared/MinusButton";
import PlusButton from "./shared/PlusButton";

interface SpeedCardProps {
    value: number
    onChange(value: number): void
}

const SpeedCard = ({value, onChange}: SpeedCardProps) => {

    return (
        <SettingCardTemplate>
            <div className={classes.header}>
                <CardTitle text={"Скорость"}/>
                <div className={classes.header__counter}>
                    <div className={classes.counter}>
                        {value}
                    </div>
                    <CardTitle text={"сек."}/>
                </div>
            </div>
            <div>
                <MinusButton onClick={() => {
                    if (value === 0) return
                    onChange(value - 1)
                }}/>
                <PlusButton onClick={() => {
                    onChange(value + 1)
                }}/>
            </div>
        </SettingCardTemplate>
    );
};

export default SpeedCard;