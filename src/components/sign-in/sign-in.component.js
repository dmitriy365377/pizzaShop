import React, { useState } from 'react'
import FormInput from '../../components/form-input/form-input.component'

import './sign-in.styles.scss'

import CustomButton from '../../components/custom-button/custom-button.component'
 
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

const SignIn = () => {
    const [state, setState] = useState({ email: '', password: '' })
    console.log('state', state)

    const handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

    }

    const handelChange = (event) => {
        const { value, name } = event.target
        setState({ ...state, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={state.email}
                    handelChange={handelChange}
                    label="email"
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={state.password}
                    handelChange={handelChange}
                    label="password"
                    required />
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn