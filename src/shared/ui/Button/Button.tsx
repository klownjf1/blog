import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
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
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
}) => {

    const mods:Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
    }

    return (
        <button
            className={classNames(s.Button, mods, [className, s[theme]])}
            type="button"
            {...otherProps}
        >
            {children}
        </button>
    );

};
