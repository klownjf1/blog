import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={'page-wrapper'}>
                    <Routes>
                        {Object.values(routeConfig).map(({element, path}) =>
                            <Route
                                key = {path}
                                path = {path}
                                element = {element}
                            >

                            </Route>
                        )}
                    </Routes>
                </div>
            </Suspense>
        </div>
    );
};

export default AppRouter;