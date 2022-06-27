import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import EventsThisWeekend from '../components/EventsThisWeekend';
import RestaurantsComponent from '../components/RestaurantsComponent';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
       
     <Hero />
     <Categories />
     <EventsThisWeekend />
     <RestaurantsComponent />
     
        
       
    </div>
  )
}

export default Home