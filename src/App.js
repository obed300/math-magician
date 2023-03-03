import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<div>Home page</div>} />
//       <Route path="about" element={<div>About page</div>} />
//       <Route path="*" element={<div>If page not found it goes here</div>} />
//     </Route>
//   </Routes>
// </BrowserRouter>

export default App;
