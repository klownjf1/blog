import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import s from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(s.SideBar, {[s.collapsed]: !collapsed}, [className])}>
            <button onClick={onToggle} type="button">
                toggle
            </button>

            <div className={s.switchers}>
                <ThemeSwitcher />

                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
