import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

import './sign-up.styles.scss'


const SignUp = () => {
    const [state, setState] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const handelSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = state

        // if (password === confirmPassword) {
        //     alert("password don`t match")
        //     return
        // }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName })
            setState({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch (error) {
            console.log(error)
        }
    }

    const handelChange = (event) => {
        const { value, name } = event.target
        setState((state) => ({ ...state, [name]: value }))
    }

    const { displayName, email, password, confirmPassword } = state
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handelSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handelChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handelChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handelChange}
                    label='Password'
                    required
                />
                 <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handelChange}
                    label='Confirm Password'
                    required
                /> 
                <CustomButton type='submit' >SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp




