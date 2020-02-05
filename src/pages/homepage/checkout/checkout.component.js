import React from 'react'
import { connect } from 'react-redux'
import './checkout.styles.scss'
import CheckoutItem from '../../../components/checkout-item/checkout-item.component'

const CheckoutPage = (props) => {
    const totalPrice = props.state.cartItems.reduce((total, amount) => {
        return amount.price * amount.quantity + total
    }, 0)
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                props.state.cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <div className='total'>
                TOTAL:{totalPrice}$</div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    state: state.cart
})

export default connect(mapStateToProps, null)(CheckoutPage)