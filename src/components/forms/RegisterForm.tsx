import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../services/authService';
import { AxiosResponse } from 'axios';

const registerSchema = Yup.object().shape(
    {
        name: Yup.string().min(6, 'Username must have at least 6 characters').max(12, 'Username can\'t have more than 12 characters').required('Please enter name'),
        email: Yup.string().email('Invalid email').required('Please enter email'),
        password: Yup.string().min(8, 'Password is too short').required('Please enter password'), //TODO: add reg ex
        confirm: Yup.string().when('password', {
            is: (value: string) => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref('password')], 'Passwords do not match'
            )
        }).required('Please repeat password'),
        age: Yup.number().min(18, 'You must be an adult to sign up').required('Please enter your age')
    }
)

const RegisterForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: 0
    } 

    return(
        <div>
            <h4>
                Register Form
            </h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={ async(values) => {
                    register(values.name, values.email, values.password, values.age).then((response: AxiosResponse)=> {
                        if(response.status === 200) {
                            console.log('User registered successfully')
                            console.log(response.data)
                            alert('User registered successfully')
                        } else {    
                            throw new Error('Error registering')
                        }
                    }).catch((error)=> console.log(`[REGISTER ERROR]: ${error}`))
                }}
                >
                    {
                        ({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => 
                            (
                               <Form>
                                {/* NAME */}
                                <label htmlFor='name'>Name</label>
                                <Field id='name' type='text' name='name' placeholder='Your name' />

                                {/* Name errors */}
                                    {
                                    errors.name && touched.name && (
                                        <ErrorMessage
                                            name='name'
                                            component='div'
                                        ></ErrorMessage>
                                    )
                                    }

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
                                    <Field id='password' type='password' name='password' placeholder='Password' />
                               
                               {/* Password errors */}
                                    {
                                        errors.password && touched.password && (
                                            <ErrorMessage
                                                name='password'
                                                component='div'
                                            ></ErrorMessage>
                                        )
                                    }

                                {/* PASSWORD REPEAT */}
                                    <label htmlFor='confirm'>Repeat password</label>
                                    <Field id='confirm' type='password' name='confirm' placeholder='Repeat your password' />
                               
                               {/* Password errors */}
                                    {
                                        errors.confirm && touched.confirm && (
                                            <ErrorMessage
                                                name='confirm'
                                                component='div'
                                            ></ErrorMessage>
                                        )
                                    }

                                {/* AGE */}
                                    <label htmlFor='age'>Age</label>
                                    <Field id='age' type='number' name='age' />
                               
                                {/* Age errors */}
                                    {
                                        errors.age && touched.age && (
                                            <ErrorMessage
                                                name='age'
                                                component='div'
                                            ></ErrorMessage>
                                        )
                                    }
                                {/* SUBMIT */}

                                    <button type='submit'>Register</button>

                                {/* Message if form is submitting */}
                                {
                                    isSubmitting ? (<p>Registering user...</p>) : null
                                }
                               </Form> 
                            )
                        }

            </Formik>

        </div>
    )
}

export default RegisterForm;

