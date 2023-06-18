import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";
import {useTranslation} from "react-i18next";


const App = () => {

    const {theme} = useTheme()

    return (
        <div className = {classNames('app', {}, [theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />

                <div className={'content-page'}>
                    <SideBar/>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;