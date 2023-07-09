import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLinks/AppLink';
import {classNames} from 'shared/lib/classNames/classNames';
import {SideBarItemType} from '../../model/item';
import s from './SideBarItem.module.scss'

interface SideBarItemProps {
    item: SideBarItemType
    collapsed?: boolean
}

export const SideBarItem = memo(({item, collapsed}: SideBarItemProps) => {

    const {t} = useTranslation()

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={item?.path}
            className={classNames(s.item, {[s.collapsed]: !collapsed}, [])}
        >
            <item.Icon className={s.icon} />
            <span className={s.link}>
                {t(item.text)}
            </span>
        </AppLink>

    );
});
