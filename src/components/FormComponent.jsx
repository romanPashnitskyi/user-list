import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

export const Form = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 230px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
`;

export const Button = styled.button`
  width: ${props => props.width || '230px' };
  height: 35px;
  margin-left: ${props => props.margin || '0' };
  color: #fff;
  background-color: #5995ef;
  border-radius: 3px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;

class FormComponent extends Component {

    handleSubmit = (values) => {
        this.props.addUsers(values);
    };

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.perPage);
    }

    render() {
        return(
            <Formik
                initialValues={{ name: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (values.name.length >= 15) {
                        errors.name = 'The length of the name is too long';
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    this.handleSubmit(values);
                    actions.setSubmitting(false);
                }}
            >
                {({ handleSubmit, handleChange, values, errors}) => (
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Label>
                            {errors.name && <Text color="red">{errors.name}</Text>}
                            <Input
                                type="text"
                                name="name"
                                values={values.name}
                                onChange={handleChange}
                                placeholder="Name"
                                border={errors.name && '1px solid red'}
                            />
                            <Input
                                type="password"
                                name="password"
                                values={values.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                        </Label>
                        <Button type='submit' onClick={(e) => handleSubmit(e)}>Add</Button>
                    </Form>
                )}
            </Formik>
        )
    }
}

export default FormComponent;
