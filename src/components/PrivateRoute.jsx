import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { isAuthentificated } from '../store/services/auth.service';

class PrivateRoute extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        render={props =>
          isAuthentificated() ? (
            <Component {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/account/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}
export default PrivateRoute;
