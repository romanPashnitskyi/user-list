import React, { Component } from 'react';
import { disconnect } from '../../store/soccet.wrapper';

import { Formik } from 'formik';
import { Input, Button, Form } from '../../components/FormComponent';

const wrapperForm = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

class Login extends Component {

    componentDidMount() {
        disconnect();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.redirectUrl !== nextProps.redirectUrl) {
            window.location.href = nextProps.redirectUrl;
        }
    }

    handleSubmit(values) {
        this.props.oauth(values.name, values.password);
    }

    render() {
        return (
            <div style={wrapperForm}>
                <Formik
                    initialValues={{ name: '', password: '' }}
                    onSubmit={(values, actions) => {
                        this.handleSubmit(values);
                        actions.setSubmitting(false);
                        actions.resetForm({ name: '' });
                    }}
                >
                    {({ isSubmitting, handleSubmit, handleChange, values }) => (
                        <Form>
                            <Input
                                type="text"
                                name="name"
                                values={values.name}
                                onChange={handleChange}
                                placeholder="Name"
                            />
                            <Input
                                type="password"
                                name="password"
                                values={values.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <Button type="submit" onClick={e => handleSubmit(e)} disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default Login;