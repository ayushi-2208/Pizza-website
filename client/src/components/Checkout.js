import React from 'react'
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';

export default function Checkout({subtotal}){

    const dispatch = useDispatch()
    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal))

    } 
    return (
        <div>

            <StripeCheckout
                amount= {subtotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51Kr0QkSHQs3RINCqqMbNcMmK3QJkihajIPk3BP9QGg3koFdmOVIGzzgufVtDxeIyiAXmhjkHLyhhAbHUsW0vgTQU00HRPlNVxY'
                currency = 'INR'
            >

                




                <button className='btn'>Pay Now</button>
            </StripeCheckout>

        </div>
    )
}