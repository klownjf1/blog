import React, {
    FC, memo, useMemo, useState,
} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button';
import {SideBarItemsList} from '../../model/item';
import {SideBarItem} from '../SideBarItem/SideBarItem';
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = async () => {
        await setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return SideBarItemsList.map((item) => (
            <SideBarItem
                item={item}
                key={item.path}
                collapsed={collapsed}
            />
        ))
    }, [collapsed])

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
                {itemsList}
            </div>

            <div className={s.switchers}>
                <ThemeSwitcher />

                <LangSwitcher className={s.lang} short={!collapsed} />
            </div>
        </div>
    );

});
