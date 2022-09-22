import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element: Element, isClosed, ...rest }){
    const isLoggedIn = false;

    if (isClosed && !isLoggedIn){
        return(
            <Redirect
                to={{ pathname: '/login', state: {prevPath: rest.location.pathname} }}
            />
        );
    }

    return <Route {...rest} element={Element} />
}

MyRoute.defaultProps = {
    isClosed: false,
}

MyRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}