import React, {Component} from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Title from '../../components/Title';

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
        const { name, error, message } = this.props;
        const { l_name } = this.state;
        const { fetchData } = this.props;
        return (
          <Wrapper padding='150px'>
              <Title title='Add User'/>
              <input onChange={ handleEdit } value={l_name}/>
              <button type='button' onClick={handleClick}>Press me</button>
              Hello {name}!
              <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, actions) => {
                  fetchData(values);
                  actions.setSubmitting(false);
                  actions.resetForm({ name: '' });
                }}
              >
                  {({ isSubmitting, handleSubmit }) => (
                    <Form>
                        <Field type="text" name="name" />
                        <ErrorMessage name="email" component="div" />
                        <button type="button" onClick={handleSubmit} disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                  )}
              </Formik>
          </Wrapper>
        );
    }
}

export default FormContainer;
