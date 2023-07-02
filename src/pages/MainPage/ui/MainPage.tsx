import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Counter} from 'entities/Counter';

interface MainPageProps {
    className?: string
}

const MainPage:FC<MainPageProps> = ({className}) => {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Основная страница')}
            <Counter />
        </div>
    );
}

export default MainPage;
