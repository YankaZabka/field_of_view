import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

interface StartDistanceCardProps {
    handleStartingDistance(value: number): void
}

const StartDistanceCard = ({handleStartingDistance}: StartDistanceCardProps) => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    const getSelectedOption = (value: number): void => {
        handleStartingDistance(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Стартовое расстояние"}/>
            <CardOptions
                options={[5, 10, 15, 20, 25, 30, 35, 40]}
                current={currentValue}
                getSelectedOption={getSelectedOption}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default StartDistanceCard;