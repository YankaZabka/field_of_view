import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

interface IncreasingDistanceCardProps {
    value: number

    onChange(value: number): void
}

const IncreasingDistanceCard = ({onChange, value}: IncreasingDistanceCardProps) => {

    const handleChange = (value: number): void => {
        onChange(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"increasing_distance"}/>
            <CardOptions
                options={[5, 10, 15, 20, 25, 30, 35, 40]}
            />
            <Slider
                min={5}
                max={40}
                value={value}
                step={5}
                changeValue={handleChange}
            />
        </SettingCardTemplate>
    );
};

export default IncreasingDistanceCard;