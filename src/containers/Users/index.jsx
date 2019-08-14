import React, {Component} from 'react';

import { Wrapper } from '../FormContainer';
import Title from '../../components/Title';

class Users extends Component {
  state = {
    l_name: ''
  };

  componentDidMount() {
    const { name } = this.props;
    this.setState({l_name: name})
  }
  handleEdit = e => {
    this.setState({l_name: e.target.value});
  };
  handleClick = () => {
    const { l_name } = this.state;
    this.props.fetchData(l_name)
  };

  render() {
    const { handleEdit, handleClick } = this;
    const { name } = this.props;
    const { l_name } = this.state;
    return (
      <Wrapper padding='50px'>
        <Title title='User List'/>
        <input onChange={ handleEdit } value={l_name}/>
        <button type='button' onClick={handleClick}>Press me</button>
        Hello {name}!
      </Wrapper>
    );
  }
}

export default Users;
