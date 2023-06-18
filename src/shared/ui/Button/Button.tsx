import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (
    {
        className,
        children,
        theme,
        ...otherProps

    },
) => (
    <button
        className={classNames(s.Button, {}, [className, s[theme]])}
        type="button"
        {...otherProps}
    >
        {children}
    </button>
);
