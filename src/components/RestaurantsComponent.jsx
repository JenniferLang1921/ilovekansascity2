import React from 'react'

const RestaurantsComponent = () => {
  return (
   
        <div name='restaurants' className='w-full  bg-white flex flex-col justify-between mt-4'>
        <h2 className='text-left uppercase mt-12 mx-12 text-2xl '>Restaurant Reviews</h2>
        <ul className='w-3/4 mx-auto mt-4' >
            <li>Hamburger Place</li>
            <li>BBQ Restaurant</li>
            <li>Chinese Restaurant</li>
            <li>Coffee Shop</li>
            <li>Deli</li>
            <li>Bakery</li>
        </ul>
        
        
        </div>
        
       
  )
}

export default RestaurantsComponent