import React from 'react';
import SettingCardTemplate from "./SettingCardTemplate";
import Slider from "./UI/Slider";
import CardTitle from "./CardTitle";
import CardOptions from "./CardOptions";

interface WordsAmountCardProps {

}

const WordsAmountCard: React.FC<WordsAmountCardProps> = () => {
    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько слов"}/>
            <CardOptions/>
            <Slider/>
        </SettingCardTemplate>
    );
};

export default WordsAmountCard;