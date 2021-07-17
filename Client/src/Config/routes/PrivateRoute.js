import React from 'react';
import { Redirect, Route } from 'react-router-dom';


//proteje las rutas, no puedes acceder a ellas sin haberte registrado
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute