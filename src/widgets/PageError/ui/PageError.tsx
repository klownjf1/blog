import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/className';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';
import s from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError:FC<PageErrorProps> = ({className}) => {
    const {t} = useTranslation()

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>

        </div>
    );
};
