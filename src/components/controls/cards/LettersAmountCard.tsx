import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

const LettersAmountCard = () => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько букв в словах"}/>
            <CardOptions
                options={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                current={currentValue}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default LettersAmountCard;