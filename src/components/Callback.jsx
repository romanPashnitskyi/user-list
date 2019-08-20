import * as qs from 'query-string';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TokenRequest } from '../store/actions/auth.actions';

class Callback extends Component {

  componentDidMount() {
    this.props.token(
        qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).code
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.props.history.replace('/app');
    } else {
      this.props.history.replace('/account/login');
    }
  }

  render() {
    return (
        <div>
          <h1>Loading...</h1>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.auth.code,
    user: state.auth.user
  };
};

const mapActionsToProps = dispatch => {
  return {
    token: (code, redirectUrl) => dispatch(TokenRequest({ code, redirectUrl })),
  };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapActionsToProps
    )(Callback)
);
