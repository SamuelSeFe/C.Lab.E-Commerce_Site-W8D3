import React from 'react'
import styled from 'styled-components'

const Sushi = ({ name, kcal, img, price, handleCart }) => {

    const handleClick = () => {
        handleCart(
            {
                name: name,
                kcal: kcal,
                img: img,
                price: price
            }
        )
        window.scrollTo(0, 0)
    }


    return (
        <Wrapper>
            <Image src={img} onClick={handleClick} />


            <TextWrapper>
                <Name>
                    <a href="/">{name}</a>
                </Name>
                <BottomTexttWrapper>
                    <Kcal>
                        kcals {kcal}
                    </Kcal>
                    <Price>
                        price: ¥{price}
                    </Price>
                </BottomTexttWrapper>
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
background: grey;
padding: 10px;
border-radius: 4px;
margin: 30px;
`

const Image = styled.img.attrs(props => ({ src: props.src }))`
width: 300px;
transition: 300ms ease-in-out all;

&:hover {
    width: 330px;
    transition: 300ms ease-in-out all;
}
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

const Name = styled.div`

a {
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
}
`

const Kcal = styled.blockquote`
margin: 10px 10px;
font-size: 1.1rem;
`
const Price = styled.blockquote`
margin: 10px 10px;
font-size: 1.1rem;
`
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
background: rgba(255,255,255,0.7142857142857143);
border-radius: 5px;
text-align: center;
`
const BottomTexttWrapper = styled.div`
display: flex;
flex-direction: row;
`


export default Sushi