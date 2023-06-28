import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLinks/AppLink';
import {useTranslation} from 'react-i18next';
import s from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar:FC<NavBarProps> = ({className}) => {
    const {t} = useTranslation(['about', 'main'])

    return (
        <div className={classNames(s.NavBar, {}, [className])}>

            <div className={s.links}>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={s.mainLink}>
                    {t('О сайте')}
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t('Основная страница')}
                </AppLink>

            </div>

        </div>
    );
};
