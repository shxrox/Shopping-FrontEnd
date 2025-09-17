import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Body from './component/Body';

import ProductDetails from './component/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/productdetails" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
