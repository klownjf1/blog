import React, {FC, useState} from 'react';
 import {classNames} from "shared/lib/classNames/className";
import s from './SideBar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SideBarProps {
    className?: string
}

export const SideBar:FC<SideBarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(s.SideBar, {[s.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>

            <div className={s.switchers}>
                <ThemeSwitcher className={className}/>
            </div>
        </div>
    );
};

