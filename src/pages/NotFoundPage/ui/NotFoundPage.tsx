import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import s from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage:FC<NotFoundPageProps> = ({className}) => {
    const {t} = useTranslation()

    return (
        <div className={classNames(s.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage
