import React from 'react'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import Main from '../../components/Main/Main'
import Asaid from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Asaid />
      <Footer />
    </>
  )
}

export default Home