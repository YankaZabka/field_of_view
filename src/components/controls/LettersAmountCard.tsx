import React from 'react';
import SettingCardTemplate from "./shared/SettingCardTemplate";
import Slider from "./shared/Slider";
import CardTitle from "./shared/CardTitle";
import CardOptions from "./shared/CardOptions";

interface LettersAmountCardProps {
    handleLettersInWords(value: number): void
}

const LettersAmountCard = ({handleLettersInWords}: LettersAmountCardProps) => {

    const handleChange = (value: number): void => {
        handleLettersInWords(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько букв в словах"}/>
            <CardOptions
                options={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            />
            <Slider
                min={3}
                max={12}
                step={1}
                changeValue={handleChange}
            />
        </SettingCardTemplate>
    );
};

export default LettersAmountCard;