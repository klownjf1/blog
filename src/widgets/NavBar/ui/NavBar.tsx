import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLinks/AppLink';
import s from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar:FC<NavBarProps> = ({className}) => {
    return (
        <div className={classNames(s.NavBar, {}, [className])}>

            <div className={s.links}>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={s.mainLink}>
                    About page
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Main
                </AppLink>

            </div>

        </div>
    );
};
