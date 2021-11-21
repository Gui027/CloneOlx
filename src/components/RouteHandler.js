import React from "react";
import { Route, Redirect } from "react-router";
import { isLogged } from '../helpes/AuthHandler';

export default ({ children, ...rest }) => {
    let logget = isLogged();
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route
            {...rest}
            render={() =>
                authorized ? children : <Redirect to="/signin" />
            }
        />
    );
}