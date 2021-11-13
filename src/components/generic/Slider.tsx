import React, {useState} from 'react';
import classes from "./Slider.module.scss";

interface SliderProps {
    changeValue(value: number): void
}

const Slider = ({changeValue}: SliderProps) => {
    const [value, setValue] = useState<number>()
    const [background, setBackground] = useState<string>("linear-gradient(to right, #f9ca24 50%, #F7F9FF 50%)")

    const generateBackground = (value: number, min: number, max: number): void | undefined => {
        if (value === min) {
            return
        }

        const percentage = (value - min) / (max - min) * 100
        setBackground('linear-gradient(to right, #f9ca24 ' + percentage + '%, #F7F9FF ' + percentage + '%)')
    }

    return (
        <div className={classes.sliderContainer}>
            <input
                type="range"
                min={1}
                max={100}
                className={classes.slider}
                style={{background: background}}
                onChange={(e) => {
                    generateBackground(value!, 0, 100)
                    setValue(Number(e.target.value))
                    changeValue(value!)
                }}
                onClick={(e) => {
                    generateBackground(value!, 0, 100)
                    setValue(Number((e.target as HTMLInputElement).value))
                    changeValue(value!)
                }}
            />
        </div>
    );
};

export default Slider;