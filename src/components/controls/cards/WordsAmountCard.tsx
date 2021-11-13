import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

const WordsAmountCard = () => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько слов"}/>
            <CardOptions
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                current={currentValue}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default WordsAmountCard;