import Header from "../Components/Header/HeaderArea"
import About from "../Components/About/About"
import Equip from "../Components/equip/Equip"
import Speaker from "../Components/Speaker/Speaker"

import React from 'react'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Equip/>
        <Speaker/>
    </div>
  )
}

export default Home