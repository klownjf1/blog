import React, {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/className';
import {AppRouter} from 'app/providers/router';
import {NavBar} from 'widgets/NavBar';
import {SideBar} from 'widgets/SideBar';
import {useTranslation} from 'react-i18next';

function App() {
    const {theme} = useTheme();
    const {t} = useTranslation('about');

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>{t('Загрузка...')}</div>}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
