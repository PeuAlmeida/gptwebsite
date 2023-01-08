import React from 'react'
import './app.css'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers/index'
import { Brand, Cta, Navbar } from './components/index'

export default function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
