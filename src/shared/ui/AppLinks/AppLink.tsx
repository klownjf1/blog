import {FC, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';
import s from './AppLink.module.scss';

export const enum AppLinkTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = memo((
    {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    }: AppLinkProps,
) => (
    <Link
        to={to}
        className={classNames(s.AppLink, {}, [className, s[theme]])}
        {...otherProps}
    >
        {children}
    </Link>
));
