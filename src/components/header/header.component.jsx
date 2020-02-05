import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../assets/header-logo.png'
import './header.styles.scss'
import { auth } from '../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/' >
                    HOMEPAGE
            </Link>
                <Link className='option' to='/menu'>
                    MENU
            </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SING OUT</div>
                        :
                        <Link className='option' to='/signin'>
                            SIGN IN
                    </Link>
                }
                <CartIcon onClick={() => setOpen((open) => !open)} />
            </div>
            {open && (
                <CartDropdown setOpen={setOpen} />
            )}
        </div>
    )
};



const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)



