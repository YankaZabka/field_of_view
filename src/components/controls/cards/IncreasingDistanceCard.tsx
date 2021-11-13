import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../shared/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

interface IncreasingDistanceCardProps {
    handleIncreasingDistance(value: number): void
}

const IncreasingDistanceCard = ({handleIncreasingDistance}: IncreasingDistanceCardProps) => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    const getSelectedOption = (value: number): void => {
        handleIncreasingDistance(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Увеличение расстояния"}/>
            <CardOptions
                options={[5, 10, 15, 20, 25, 30, 35, 40]}
                current={currentValue}
                getSelectedOption={getSelectedOption}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default IncreasingDistanceCard;