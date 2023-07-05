import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string
    theme?: TextTheme
}

export const Text:FC<TextProps> = (
    {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    },
) => {

    const {t} = useTranslation()
    return (
        <div className={classNames(s.Text, {[s[theme]]: true}, [className])}>
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
};
