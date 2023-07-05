import React, {FC, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUserName';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';
import s from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar:FC<NavBarProps> = ({ className }) => {

    const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false)
    }, [setIsAuthOpen])

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true)
    }, [setIsAuthOpen])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(s.NavBar, {}, [className])}>
                <Button
                    type="button"
                    onClick={onLogout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={s.links}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
    }
    return (
        <div className={classNames(s.NavBar, {}, [className])}>
            <Button
                type="button"
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal
                isOpen={isAuthOpen}
                onClose={onCloseModal}
            />
        </div>
    );

};
