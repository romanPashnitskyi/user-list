import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthentificated } from '../store/services/auth.service';

class PublicRoute extends Component {

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          !isAuthentificated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/app/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default PublicRoute;
