import React, {FC, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import s from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar:FC<NavBarProps> = ({ className }) => {

    const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prev) => !prev)
    }, [setIsAuthOpen])

    return (
        <div className={classNames(s.NavBar, {}, [className])}>
            <Button
                type="button"
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut illum inventore
                iusto neque officia, qui ratione sunt suscipit ut. Eligendi laborum,
                laudantium nemo nesciunt numquam pariatur reiciendis repellat vitae?
            </Modal>
        </div>
    );

};
