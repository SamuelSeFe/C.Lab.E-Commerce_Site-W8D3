import { useState } from 'react';
import Sushi from './components/Sushi'
import Navbar from './components/Navbar'
import styled from 'styled-components'

function App() {

  const [cart, setCart] = useState([])
  const [sushiItems, setSushiItems] = useState([
    {
      name: 'salmon dragon roll',
      kcal: 475,
      img: 'https://cdn.yosushi.com/r/w-1260/p-webp/YoSushi/files/cd/cd5acfeb-bbd2-48ab-bf3f-e70552a4964c.637914494530000000.png',
      price: 2.5
    },
    {
      name: 'avocado maki',
      kcal: 203,
      img: 'https://cdn.yosushi.com/r/w-1260/p-webp/YoSushi/files/fe/fee19c2a-b543-4921-a392-e68d64a78565.637843251680000000.png',
      price: 3.5
    },
    {
      name: 'beef teriyaki',
      kcal: 331,
      img: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/0d/0dc48219-100c-480d-bbc4-184160447b81.637795880490000000.png',
      price: 4.0
    },
    {
      name: 'california temaki',
      kcal: 223,
      img: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/f3/f3ed4154-137f-4a4f-b648-1a1bca99d4d0.637843252250000000.png',
      price: 4.4
    },
    {
      name: 'chicken curry ramen',
      kcal: 473,
      img: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/4d/4d40e7f6-1339-4a4f-9ce7-5f20821383b9.637843252910000000.png',
      price: 6.0
    },
    {
      name: 'chicken gyoza',
      kcal: 140,
      img: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/7b/7b8689e3-4b12-4280-a642-b3b7360d5dac.637843253380000000.png',
      price: 4.2
    },
    {
      name: 'chicken katsu',
      kcal: 217,
      img: 'https://cdn.yosushi.com/r/w-1260/p-webp/YoSushi/files/6c/6c2f61a1-5ae9-4a54-8607-a592d9031807.637795888920000000.png',
      price: 6.6
    },
    {
      name: 'chicken terikai',
      kcal: 197,
      img: 'https://cdn.yosushi.com/r/w-630/p-webp/YoSushi/files/50/509fc641-602f-4ac8-b6ec-7d65be2c0c6a.637865673940000000.png',
      price: 8.0
    },
  ])


  const handleCart = (obj) => {
    setCart((prev) => {
      return [...prev, obj]
    })
  }

  const deleteFromCart = (_index) => {
    const copyArr = [...cart]
    let index = -1
    const newArr = copyArr.filter((obj) => {
      index++
      return _index !== index
    })

    setCart(newArr)
  }


  const sushiNodes = sushiItems.map((sushi, index) => {
    return (
      <Sushi key={index} name={sushi.name} kcal={sushi.kcal} img={sushi.img} price={sushi.price} handleCart={handleCart} />
    )
  })





  return (
    <>
      <Navbar cart={cart} deleteFromCart={deleteFromCart} />
      <MenuWrapper>
        {sushiNodes}
      </MenuWrapper>

    </>
  );
}

const MenuWrapper = styled.div`
display: flex;
flex-wrap: wrap;
font-family: 'Roboto', sans-serif;
`

export default App;
