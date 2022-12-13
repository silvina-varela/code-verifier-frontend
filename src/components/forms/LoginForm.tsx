import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../services/authService';
import { AxiosResponse } from 'axios';

// Validation schema with Yup
const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginForm = () => {
   
    const initialCredentials = {
        email: '',
        password: ''
    } 

    return(
        <div>
            <h4>
                Login Form
            </h4>

            {/* Formik */}
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={ async(values) => {
                    login(values.email, values.password).then((response: AxiosResponse)=> {
                        if(response.status === 200) {
                            
                             if(response.data.token){
                                sessionStorage.setItem('session JWTtoken', response.data.token )
                             } else {
                                throw new Error('Error with token')
                             }
                        } else {    
                            throw new Error('Invalid credentials')
                        }
                    }).catch((error)=> console.log(`[LOGIN ERROR]: ${error}`))
                }}
                >
                    {
                        ({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => 
                            (
                               <Form>
                                {/* EMAIL */}
                                    <label htmlFor='email'>Email</label>
                                    <Field id='email' type='email' name='email' placeholder='example@email.com' />
                               
                               {/* Email errors */}
                                    {
                                        errors.email && touched.email && (
                                            <ErrorMessage
                                                name='email'
                                                component='div'
                                            ></ErrorMessage>
                                        )
                                    }

                                {/* PASSWORD */}
                                    <label htmlFor='password'>Password</label>
                                    <Field id='password' type='password' name='password' placeholder='examplepassword' />
                               
                               {/* Password errors */}
                                    {
                                        errors.password && touched.password && (
                                            <ErrorMessage
                                                name='password'
                                                component='div'
                                            ></ErrorMessage>
                                        )
                                    }
                                {/* SUBMIT */}

                                    <button type='submit'>Login</button>

                                {/* Message if form is submitting */}
                                {
                                    isSubmitting ? (<p>Checking credentials...</p>) : null
                                }
                               </Form> 
                            )
                        }

            </Formik>

        </div>
    )

}

export default LoginForm;