import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    let signed;
    if (localStorage.getItem("@upf-eventos")) {
        signed = JSON.parse(localStorage.getItem("@upf-eventos"));
    }

    if (!signed && isPrivate) {
        return <Redirect to="/login" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/app" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
