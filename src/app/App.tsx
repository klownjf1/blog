import React from 'react';
import {Link } from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className = {classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to = {'/about'}>About page</Link>
            <Link to = {'/'}>Main</Link>
            <AppRouter />
        </div>
    );
};

export default App;