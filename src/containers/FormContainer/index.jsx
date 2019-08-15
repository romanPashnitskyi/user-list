import React, {Component} from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import Message from '../../components/Message';
import FormComponent from '../../components/FormComponent'

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
    const { message } = this.props;
    const { fetchData, getUsers } = this.props;
    return (
      <Wrapper padding='150px'>
        <Title title='Add User'/>
        <FormComponent fetchData={fetchData} getUsers={getUsers}/>
        <Message message={message}/>
      </Wrapper>
    );
  }
}

export default FormContainer;
