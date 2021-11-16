import React, {useState} from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import CardTitle from "./shared/CardTitle";
import classes from './SpeedCard.module.scss'
import MinusButton from "./shared/MinusButton";
import PlusButton from "./shared/PlusButton";

interface SpeedCardProps {
    handleSpeed(value: number): void
}

const SpeedCard = ({handleSpeed}: SpeedCardProps) => {
    const [localSpeed, setLocalSpeed] = useState<number>(1)

    return (
        <SettingCardTemplate>
            <div className={classes.header}>
                <CardTitle text={"Скорость"}/>
                <div className={classes.header__counter}>
                    <div className={classes.counter}>
                        {localSpeed}
                    </div>
                    <CardTitle text={"сек."}/>
                </div>
            </div>
            <div>
                <MinusButton onClick={() => {
                    if (localSpeed === 0) return
                    setLocalSpeed(prev => prev - 1)
                    handleSpeed(localSpeed - 1)
                }}/>
                <PlusButton onClick={() => {
                    setLocalSpeed(prev => prev + 1)
                    handleSpeed(localSpeed + 1)
                }}/>
            </div>
        </SettingCardTemplate>
    );
};

export default SpeedCard;