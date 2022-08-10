import React from 'react'
import styled from 'styled-components'

const CartItem = ({ name, kcal, price, img, deleteFromCart, index }) => {

    const handleClick = () => {
        deleteFromCart(index)
    }


    return (
        <Wrapper>
            <Item>
                <button onClick={handleClick}>x</button>
                <img src={img} style={{ width: '30px', height: '30px' }} alt="" />
                <h2>{name}</h2>
                <h3>{kcal}</h3>
                <h2>¥{price}</h2>

            </Item>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: auto;
background: white;
margin: 0px 10px;
border-radius: 5px;
`
const Item = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 10px;
text-align: center;
place-items: center;
`



export default CartItem