import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className, short}) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggleLanguage}
            className={classNames('', {}, [])}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
