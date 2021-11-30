import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import CardTitle from "./shared/CardTitle";
import classes from './SpeedCard.module.scss'
import MinusButton from "./shared/MinusButton";
import PlusButton from "./shared/PlusButton";
import {useIntl} from "react-intl"

interface SpeedCardProps {
    value: number

    onChange(value: number): void
}

const SpeedCard = ({value, onChange}: SpeedCardProps) => {

    const intl = useIntl()

    return (
        <SettingCardTemplate>
            <div className={classes.header}>
                <CardTitle text={"speed"}/>
                <div className={classes.header__counter}>
                    <div className={classes.counter}>
                        {intl.formatNumber(value)}
                    </div>
                    <CardTitle text={"speed_value"}/>
                </div>
            </div>
            <div>
                <MinusButton onClick={() => {
                    if (value === 1) return
                    onChange(value - 0.5)
                }}/>
                <PlusButton onClick={() => {
                    if (value === 5) return
                    onChange(value + 0.5)
                }}/>
            </div>
        </SettingCardTemplate>
    );
};

export default SpeedCard;