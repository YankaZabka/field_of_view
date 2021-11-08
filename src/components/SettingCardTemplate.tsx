import React from 'react';
import classes from "./SettingCardTemplate.module.scss"

interface SettingCardTemplateProps {
    children: object,
}

const SettingCardTemplate: React.FC<SettingCardTemplateProps> = ({children}) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};

export default SettingCardTemplate;