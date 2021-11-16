import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

interface IncreasingDistanceCardProps {
    handleIncreasingDistance(value: number): void
}

const IncreasingDistanceCard = ({handleIncreasingDistance}: IncreasingDistanceCardProps) => {

    const handleChange = (value: number): void => {
        handleIncreasingDistance(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Увеличение расстояния"}/>
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

export default IncreasingDistanceCard;