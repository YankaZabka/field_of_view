import React, {useState} from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../shared/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

interface LettersAmountCardProps {
    handleLettersInWords(value: number): void
}

const LettersAmountCard = ({handleLettersInWords}: LettersAmountCardProps) => {
    const [currentValue, setCurrentValue] = useState<number>(50)

    const handleChange = (value: number): void => {
        setCurrentValue(value)
    }

    const getSelectedOption = (value: number): void => {
        handleLettersInWords(value)
    }

    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько букв в словах"}/>
            <CardOptions
                options={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                current={currentValue}
                getSelectedOption={getSelectedOption}
            />
            <Slider changeValue={handleChange}/>
        </SettingCardTemplate>
    );
};

export default LettersAmountCard;