import React, {Component} from 'react';
import {connect} from 'react-redux';
import {someAction} from '../store/actions/clickAction';

class App extends Component {

  handleClick = () => {
    this.props.main.name = 'Roman';
    this.props.someAction(this.props.main.name)
  };

  render() {
    return (
      <div className="App">
        <button type="submit" onClick={this.handleClick}>Press me</button>
        Hello {this.props.main.name}!
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    someAction: (name) => {
      dispatch(someAction(name))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
