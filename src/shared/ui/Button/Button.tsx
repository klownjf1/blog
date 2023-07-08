import {ButtonHTMLAttributes, FC, memo} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE= 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize
    disabled?: boolean
}

export const Button = memo(({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}: ButtonProps) => {

    const mods:Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled,
    }

    return (
        <button
            className={classNames(s.Button, mods, [className, s[theme]])}
            type="button"
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );

});
