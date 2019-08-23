import React, {Component} from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import Message from '../../components/Message';
import FormComponent from '../../components/FormComponent';

export const Wrapper = styled.div`
    height: 20vh;
    width: 50vw;
    padding-top: ${props => props.padding}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

class FormContainer extends Component {

  render() {
    const { page, perPage, message, addUsers, getUsers } = this.props;
    return (
      <Wrapper padding='150px'>
        <Title title='Add User'/>
        <FormComponent addUsers={addUsers} getUsers={getUsers} page={page} perPage={perPage}/>
        <Message message={message}/>
      </Wrapper>
    );
  }
}

export default FormContainer;
