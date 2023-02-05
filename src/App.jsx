import { useEffect, useState } from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import Header from './components/HomePage/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from './components/HomePage/Main'

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div>
      <Navbar/>
    {/* <div data-aos="fade-left">
      <img src="https://fakeimg.pl/350x200/?text=World&font=lobster"></img>
    </div> */}
      <Header/>
      <Main/>
    </div>
  )
}

export default App
