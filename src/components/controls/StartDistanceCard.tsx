import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

interface StartDistanceCardProps {
    handleStartingDistance(value: number): void
}

const StartDistanceCard = ({handleStartingDistance}: StartDistanceCardProps) => {

    const handleChange = (value: number): void => {
        handleStartingDistance(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Стартовое расстояние"}/>
            <CardOptions
                options={[5, 10, 15, 20, 25, 30, 35, 40]}
            />
            <Slider
                min={5}
                max={40}
                step={5}
                changeValue={handleChange}
            />
        </SettingCardTemplate>
    );
};

export default StartDistanceCard;