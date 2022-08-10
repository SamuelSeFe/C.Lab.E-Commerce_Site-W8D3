import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ShoppingCart from './ShoppingCart'


const Navbar = ({ cart, deleteFromCart }) => {

    const [shoppingCart, setShoppingCart] = useState({
        show: false,
        cart: cart
    })

    const cartTotal = cart.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.price
    }, 0)


    const closeCart = () => {
        setShoppingCart(prev => {
            return { ...prev, show: false }
        })
    }

    const showCart = () => {
        setShoppingCart(prev => {
            return { ...prev, show: true }
        })

    }

    return (
        <>
            <NavWrapper>
                <ul>
                    <li>
                        <a href="/">Sup Sushi</a>
                    </li>
                    <li>
                        <button onClick={showCart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            ¥{cartTotal}
                        </button>
                    </li>
                </ul>
            </NavWrapper>
            {shoppingCart.show && <ShoppingCart closeCart={closeCart} cart={cart} deleteFromCart={deleteFromCart} cartTotal={cartTotal} />}
        </>
    )
}

const NavWrapper = styled.nav`
background: #f08e6C;

ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
}

ul li {
    margin: 10px;
}
`



export default Navbar