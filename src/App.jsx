import { useState } from 'react'
import Navbar from './component/Navbar' 
import Body from './component/Body'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
      AOS.init({
        duration: 5000, 
        once: true,     
      });
    }, []);

  return (
    <>
      <Navbar />
      <Body />
  
    </>
  )
}

export default App
