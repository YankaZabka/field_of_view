import React, {useEffect, useState} from 'react';
import classes from "./GamePage.module.scss"
import {IOptions} from "../../interfaces/options";
import {library} from "../../data/library/library";
import {sampleSize} from "lodash";

interface TextPageProps {
    options: IOptions

    onEnd(): void
}

const GamePage = ({options, onEnd}: TextPageProps) => {
    const [words] = useState(sampleSize(library.filter(word => word.length === options.lettersInWords), options.numberOfWords))
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [separatingIndex, setSeparatingIndex] = useState<number>()
    const [distance, setDistance] = useState(options.startingDistance)

    useEffect(() => {
        if (currentWordIndex === 0) {
            setSeparatingIndex(getSeparateIndex(words[currentWordIndex]))
        }

        setTimeout(() => {

            if (currentWordIndex === words.length - 1) {
                onEnd()
            } else {
                setSeparatingIndex(getSeparateIndex(words[currentWordIndex]))
                setDistance(prev => prev + options.increasingDistance)
                setCurrentWordIndex(prev => prev + 1)
            }
        }, options.speed * 1000)
    }, [currentWordIndex])

    return (

        <div className={classes.page}>
            <div
                className={classes.leftPart}
                style={{marginRight: distance}}
            >
                {
                    words[currentWordIndex].slice(0, separatingIndex)
                }
            </div>
            <div className={classes.tilde}/>
            <div
                className={classes.rightPart}
                style={{marginLeft: distance}}
            >
                {
                    words[currentWordIndex].slice(separatingIndex)
                }
            </div>
        </div>
    );
};

export default GamePage;

function getSeparateIndex(str: string): number {

    if (str.length % 2 === 0) {
        return str.length / 2
    } else if (Math.random() < 0.5) {
        return Math.floor(str.length / 2)
    } else {
        return Math.ceil(str.length / 2)
    }

}