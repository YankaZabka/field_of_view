import React from 'react';
import SettingCardTemplate from "../SettingCardTemplate";
import Slider from "../../generic/Slider";
import CardTitle from "../CardTitle";
import CardOptions from "../CardOptions";

const WordsAmountCard = () => {
    return (
        <SettingCardTemplate>
            <CardTitle text={"Сколько слов"}/>
            <CardOptions/>
            <Slider/>
        </SettingCardTemplate>
    );
};

export default WordsAmountCard;