import React from 'react';
import classes from "./Slider.module.scss";

interface SliderProps {
    min: number
    max: number
    step: number
    value: number
    changeValue(value: number): void
}

const Slider = ({min, max, step, changeValue, value}: SliderProps) => {

    return (
        <div className={classes.sliderContainer}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                className={classes.slider}
                onChange={(e) => {
                    changeValue(Number(e.target.value))
                }}
                onClick={(e) => {
                    changeValue(Number((e.target as HTMLInputElement).value))
                }}
            />
        </div>
    );
};

export default Slider;