import React from 'react';
import classes from "./CardOptions.module.scss"
import {nanoid} from "nanoid"

interface CardOptionsProps {
    options: number[]
    current: number

    getSelectedOption(value: number): void
}

const CardOptions = ({getSelectedOption, options, current}: CardOptionsProps) => {

    const multiplier = options.length === 10 ? 10 : 12.5

    const getSelected = (number: number, index: number, current: number): string => {
        const styles = []
        if (number < 10) styles.push(classes.oneDigit)
        if (current < (index + 1) * multiplier && current >= index * multiplier) {
            styles.push(classes.selected)
            getSelectedOption(number)
        }

        return styles.join(' ')
    }

    return (
        <div className={classes.options}>
            {options.map((number, index) => {
                const styles = getSelected(number, index, current)

                return <div
                    key={nanoid()}
                    className={styles}
                >
                    {number}
                </div>
            })}
        </div>
    );
};

export default CardOptions;