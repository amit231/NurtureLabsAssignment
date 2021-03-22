
import React, { useState } from 'react'
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Filters from './components/Filters'
import FeaturedExperts from './components/FeaturedExperts'
const Background = styled.div`
  width:100vw;
  height:100vh;
  `
const Flex = styled.div`
  background-color:rgba(218, 218, 218,0.2);
  display: flex;
  justify-content: space-between;
  padding: 40px 4vw 0px 3vw;
`

function App() {
  const [navBtn, setNavBtn] = useState(1);
  let navBtnHandler = (i) => {
    setNavBtn(i);
  }
  return (
    <Background>
      <Header navBtn={navBtn} set={setNavBtn} />
      <Flex>
        <Filters />
        <FeaturedExperts />
      </Flex>
    </Background>
  );
}

export default App;
