import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { talent } from '../../static/signUpInput'
import './signupForm.scss'
import SubmitButton from '../button/SubmitButton';
import { Input } from 'reactstrap';
import axios from 'axios';


const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),

});

const SignUpform = ({ activeTab }) => {



    const [checkTerms, setCheckTerms] = React.useState(true);
    const [postData, setPostData] = React.useState({})
    return (
        <div className="signUpFormDiv">

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    userName: '',
                    email: '',
                    password: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {

                    axios.post({
                        Fan: 'http://wren.in:3200/api/sign-up/fan',
                        Talent: 'http://wren.in:3200/api/sign-up/talent'
                    }[activeTab], values)
                        .then(response => setPostData({ articleId: response }))
                        .catch(error => {
                            setPostData({ errorMessage: error.message });
                            console.error('There was an error!', error);
                        });
                    resetForm({
                        values: ''
                    })
                }}
            >
                {({ errors, touched }) => (
                    <Form className="signUpFormDiv__form">

                        {
                            talent.map((field) => {
                                return (

                                    <div className="signUpFormDiv__form__inputDiv" key={field.id}>
                                        <span className="signUpFormDiv__form__inputDiv__inputLabel">{field.placeholder}*</span>
                                        <Field
                                            className='signUpFormDiv__form__inputDiv__inputField'
                                            placeholder={field.placeholder}
                                            type={field.type}
                                            name={field.name} />
                                        {errors[field.name] && touched[field.name] ? (
                                            <div className="signUpFormDiv__form__inputDiv__errorsDiv" >{errors[field.name]}</div>
                                        ) : null}
                                    </div>
                                )
                            })
                        }
                        <br />
                        <span className='signUpFormDiv__form__CheckBoxDiv'>
                            <Input onClick={() => setCheckTerms(!checkTerms)} className='signUpFormDiv__form__CheckBoxDiv__checkBox' type="checkbox" /> I agree to the <a href="TermsAndConditions"> &nbsp; Terms and Conditions.</a>
                        </span>
                        <SubmitButton checkTerms={checkTerms} />
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default SignUpform
