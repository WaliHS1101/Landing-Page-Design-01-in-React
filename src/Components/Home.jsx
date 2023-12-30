import React from 'react'
import TopBox from './Home/TopBox'
import HomePageProduct from './Home/HomePageProduct'
import HomeProduct from "./Home/HomeProduct"

function Home(props) {
  return (
    <>
      <TopBox />
      <HomePageProduct PP={HomeProduct} />
    </>
  )
}

export default Home