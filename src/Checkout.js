import { DialogTitle } from '@material-ui/core';
import React from 'react'
import'./Checkout.css'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider';

function Checkout() {
    const [ {basket} , dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <a target="_blank" rel='norefferer' href="https://www.faucetcrypto.com/ref/313304"><img src="https://www.faucetcrypto.com/banners/728x90.gif" alt ='' width="900" height="90"/></a>
                
                <div>
                    <h2 className ='checkout_title'>Your Shopping Basket</h2>
                    {basket.map(item =>(
                    <CheckoutProduct id ={item.id} title={item.title} image={item.image} price={item.price}  rating={item.rating}/>
                                    
                                                
                    ))}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                </div>
            </div>
            <div className = 'checkout_right'>
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout
