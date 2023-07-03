import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import s from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm:FC<LoginFormProps> = ({className}) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(s.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={s.input}
                placeholder={t('Введите логин')}
                autofocus
            />
            <Input
                type="text"
                className={s.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={s.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
