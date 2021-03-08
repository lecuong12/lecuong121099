import React from 'react';
import './style.css';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from "yup";

function Login(props) {
    const { onSubmit } = props;
    const validateForm = Yup.object().shape({
        accountId: Yup.string().email("Invalid email format").required("Required"),
        password: Yup
            .string()
            .required("Required"),
    })
    return (
        <>
            <Formik
                initialValues={{ accountId: '', password: '' }}
                validationSchema={validateForm}
                onSubmit={(values) => { onSubmit(values); }}
            >
                {(formProps) => {
                    const {
                        handleSubmit,
                        handleChange,
                        handleBlur,
                    } = formProps
                    return (
                        <div className="login-page">
                            <div className="form">
                                <Form onSubmit={handleSubmit} className="login-form">
                                    <input
                                        placeholder="username"
                                        name="accountId"
                                        type="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name="accountId">
                                        {(msg) => (<>
                                            <div className="wrap">
                                                <div className="validate-input">* {msg}</div>
                                            </div>
                                        </>)}
                                    </ErrorMessage>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name="password">
                                        {(msg) => (<>
                                            <div className="wrap">
                                                <div className="validate-input">* {msg}</div>
                                            </div>
                                        </>)}
                                    </ErrorMessage>
                                    <button>login</button>
                                </Form>
                            </div>
                        </div>
                    )
                }}
            </Formik>
        </>
    );
}

export default Login;