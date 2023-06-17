import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/className";
import s from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}


export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme()


    return (
        <Button
            theme = {ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(s.ThemeSwitcher,{},[className])}
        >
            {theme === Theme.DARK? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

