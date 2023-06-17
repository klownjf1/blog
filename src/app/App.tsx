import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";



const App = () => {

    const {theme} = useTheme()
    console.log(theme)
    return (
        <div className = {classNames('app', {}, [theme])}>
            <NavBar />

            <div className={'content-page'}>
                <SideBar/>
                <AppRouter />
            </div>


        </div>
    );
};

export default App;