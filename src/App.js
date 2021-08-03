import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Portfolio/>
        <Footer/>
      </>
    )
  }
}

export default App
