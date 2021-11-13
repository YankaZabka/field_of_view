import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

interface WordsAmountCardProps {
    handleNumberOfWords(value: number): void
}

const WordsAmountCard = ({handleNumberOfWords}: WordsAmountCardProps) => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
        handleNumberOfWords(Math.round(value / 10))
    }

    const getSelectedOption = (value: number): void => {
        handleNumberOfWords(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько слов"}/>
            <CardOptions
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                current={currentValue}
                getSelectedOption={getSelectedOption}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default WordsAmountCard;