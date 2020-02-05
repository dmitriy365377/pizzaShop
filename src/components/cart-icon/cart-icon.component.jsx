import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/delivery-truck.svg'
import './cart-icon.styles.scss'

import { connect } from 'react-redux'

const CartIcon = ({ onClick, itemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={onClick} />
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
})


export default connect(mapStateToProps, null)(CartIcon)

