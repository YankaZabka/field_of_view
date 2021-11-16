import React, {useState} from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

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