import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Restaurants from './pages/Restaurants';
import Thingstodoinkc from './pages/Thingstodoinkc';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';



function App() {
useEffect(() => {
  ReactGA.initialize('320228444');
  ReactGA.send('/');

}, [])

  return (
    <div> 
     

     <Router>
    <Navbar />
       <Routes>
       <Route path="/" element={<Home />} />
       <Route exact path="/home" element={<Home />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/restaurants" element={<Restaurants />} />
         <Route path="/thingstodoinkc" element={<Thingstodoinkc />} />
         <Route path="/events" element={<Events />} />
       </Routes>
       <Footer />
       </Router>
 
   
    </div>
  );
 
}

export default App;
