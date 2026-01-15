import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'
import Hero from './component/Hero'
import Services from './component/Services'
import Footer from './component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
