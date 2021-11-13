import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

const IncreasingDistanceCard = () => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Увеличение расстояния"}/>
            <CardOptions
                options={[5, 10, 15, 20, 25, 30, 35, 40]}
                current={currentValue}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default IncreasingDistanceCard;