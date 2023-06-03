import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import AppCarousel from './Components/Carousel';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppCarousel />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
