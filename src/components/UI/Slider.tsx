import React from 'react';
import classes from "../../scss/Slider.module.scss";

interface SliderProps {

}

const Slider: React.FC<SliderProps> = () => {
    return (
        <div className={classes.sliderContainer}>
            <input
                type="range"
                min={0}
                max={100}
                className={classes.slider}
            />
        </div>
    );
};

export default Slider;