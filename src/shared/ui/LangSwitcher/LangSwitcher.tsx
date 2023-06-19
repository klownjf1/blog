import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [])}
        >
            {t('Язык')}
        </Button>
    );
};
