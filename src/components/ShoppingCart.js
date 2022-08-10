import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

const shoppingCart = ({ closeCart, cart, deleteFromCart, cartTotal }) => {

    const handleClick = () => {
        closeCart()
    }

    const cartItems = cart.map((item, index) => {
        return <CartItem key={index} name={item.name} kcal={item.kcal} img={item.img} price={item.price} index={index} deleteFromCart={deleteFromCart} />
    })




    return (
        <Wrapper>
            <Button onClick={handleClick}>
                ❌
            </Button>
            <ShoppingCart>
                <Title> 🍣 Sup Sushi 🍣</Title>
                {cartItems}
                <h2>total: ¥{cartTotal}</h2>
            </ShoppingCart>
        </Wrapper>
    )
}


const Wrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
left: 30%;
top: 10%;
font-family: 'Roboto', sans-serif;
border-radius: 5px;
border: 2px solid white;

`

const ShoppingCart = styled.div`
background: rgb(240,142,108);
background: linear-gradient(180deg, rgba(240,142,108,1) 50%, rgba(255,255,255,0.1876750700280112) 100%);
width: 400px;
height: 500px;
border-radius: 5px;
text-align: center;
`

const Title = styled.h1`
font-size: 3rem;
`

const Button = styled.button`
background: rgb(240,142,108);
background: radial-gradient(circle, rgba(240,142,108,1) 0%, rgba(255,255,255,0) 95%);
border: none;
`

export default shoppingCart