import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

interface WordsAmountCardProps {
    value: number
    onChange(value: number): void
}

const WordsAmountCard = ({onChange, value}: WordsAmountCardProps) => {

    const handleChange = (value: number): void => {
        onChange(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"number_of_words"}/>
            <CardOptions
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
            <Slider
                min={1}
                max={10}
                value={value}
                step={1}
                changeValue={handleChange}
            />
        </SettingCardTemplate>
    );
};

export default WordsAmountCard;