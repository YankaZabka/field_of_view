import React from 'react';
import classes from "../../scss/Slider.module.scss";

interface SliderProps {

}

const Slider: React.FC<SliderProps> = () => {

    // generateBackground() {
    //     if (value === min) {
    //         return
    //     }
    //
    //     const percentage =  (value - min) / (max - min) * 100
    //     return 'background: linear-gradient(to right, #f9ca24 ' + percentage + '%, #F7F9FF ' + percentage + '%)'
    // }

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