import React from 'react';
import {useTranslation} from 'react-i18next';
import {BugButton} from 'app/providers/ErrorBoundary';

function MainPage() {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Основная страница')}
        </div>
    );
}

export default MainPage;
