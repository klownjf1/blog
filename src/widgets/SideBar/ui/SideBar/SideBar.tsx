import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLinks/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {t} = useTranslation();

    const onToggle = async () => {
        await setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(s.SideBar, { [s.collapsed]: !collapsed }, [className])}
        >
            <Button
                onClick={onToggle}
                type="button"
                data-testid="sidebar-toggle"
                className={s.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {/* {t('Переключить')} */}
                {collapsed ? '>' : '<'}
            </Button>

            <div className={s.items}>

                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.about}
                    className={s.item}
                >
                    <MainIcon className={s.icon} />
                    <span className={s.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                    className={s.item}
                >
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>
                        {t('Основная страница')}
                    </span>
                </AppLink>

            </div>

            <div className={s.switchers}>
                <ThemeSwitcher />

                <LangSwitcher className={s.lang} short={!collapsed} />
            </div>
        </div>
    );

};
