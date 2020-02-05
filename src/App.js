import React, { useState, useEffect, } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import MenuPage from './pages/homepage/menu/menu.component'
import CheckoutPage from './pages/homepage/checkout/checkout.component'

import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.reducer'

const App = (props) => {
  let unsubscribeFromAuth = null

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        props.setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin'
          render={() =>
            props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (user) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
