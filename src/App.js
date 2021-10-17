import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import { ParallaxProvider } from 'react-scroll-parallax'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <ParallaxProvider>
        <Portfolio/>
        </ParallaxProvider>
        {/* <Footer/> */}
      </>
    )
  }
}

export default App
