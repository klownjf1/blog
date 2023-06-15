import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/classNames/className";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className = {classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>Toggle theme</button>

            <Link to = {'/about'}>About page</Link>
            <Link to = {'/'}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path = {'/about'} element = {<AboutPageAsync />}/>
                    <Route path = {'/'} element = {<MainPageAsync />}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;