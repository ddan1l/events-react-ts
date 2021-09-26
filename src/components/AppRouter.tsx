import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {

    const {isAuth} = useTypedSelector(state => state.auth)

    if (isAuth){
        return (
            <Switch>
                {privateRoutes.map(route => <Route key={route.path} {...route}/>)}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
        )
    }
    else {
        return (
            <Switch>
                {publicRoutes.map(route => <Route key={route.path} {...route}/>)}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
        )
    }
};

export default AppRouter;