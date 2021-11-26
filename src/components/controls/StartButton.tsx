import React from 'react';
import classes from "./StartButton.module.scss"
import {FormattedMessage} from "react-intl";

interface StartButtonProps {
    onStart(): void
}

const StartButton = ({onStart}: StartButtonProps) => {
    return (
        <div className={classes.card}>
            <button onClick={onStart} className={classes.button}>
                <FormattedMessage id="start_button"/>
            </button>
        </div>
    );
};

export default StartButton;