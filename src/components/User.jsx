import React, {Component} from 'react';
import styled from 'styled-components';
import { Edit, Delete, Done, Cancel } from '@material-ui/icons';

import { Label, Text} from './FormComponent';
import {Formik} from 'formik';

const UserForm = styled.form`
  width: 166px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  text-align: left;
`;

const UserName = styled.div`
  width: 220px;
  font-size: 1em;
  text-align: left;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${props => props.padding || '0'};
  margin-left: ${props => props.margin || '0'};
  font-size: 1em;
  text-align: left;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 160px;
  height: 18px;
  border: '1px solid #ccc'};
  background-color: #fff;
`;

class User extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      edit: false
    };
  }

  handleDelete = (user) =>  {
    this.props.deleteUser(user);
  };

  handleEdit = () => {
    this.setState({
      edit: true
    });
  };

  handleSubmit(values) {
    this.props.editUsers(this.props.user._id, values.name);
    this.setState({edit: false});
  };

  handleCancel = () => {
    this.setState({edit: false});
  };

  render() {
    const { user, loading } = this.props;
    const initialValues = {name: user.name};
    return (
        <UserWrapper>
          <UserName>
            {loading
                ? (loading ? <p>Loading...</p> : '' ? user.name : '')
                : (this.state.edit ?
                    <Formik
                        initialValues={initialValues}
                        validate={values => {
                          let errors = {};
                          if (values.name.length >= 15) {
                            errors.name = 'The length of the name is too long.';
                          } else if (values.name.length === 0 || values.name === '0') {
                            errors.name = 'Please, type your name.';
                          }
                          return errors;
                        }}
                        onSubmit={(values) => {
                          this.handleSubmit(values);
                        }}
                    >
                      {({ isSubmitting, handleSubmit, handleChange, values, errors}) => (
                          <UserForm onSubmit={handleSubmit}>
                            <Label>
                              {errors.name && <Text color="red">{errors.name}</Text>}
                              <Input
                                  type="text"
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  onSubmit={handleSubmit}
                                  placeholder="Name"
                              />
                            </Label>
                            <Button padding='55px'><Done type='button' onClick={(e) => handleSubmit(e)}/></Button>
                          </UserForm>
                      )}
                    </Formik> : user.name)
            }
          </UserName>
          {
            this.state.edit
                ? ''
                : <Button><Edit onClick={event => this.handleEdit()}/></Button>
          }
          {
            this.state.edit
                ? <Button margin='25px'><Cancel onClick={event => this.handleCancel()}/></Button>
                : <Button><Delete onClick={event => this.handleDelete(user)}/></Button>
          }
        </UserWrapper>

    )
  }
}

export default User;