import React from 'react'

const Categories = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-3 gap-2 px-2 text-center'>
            <div className='border py-8 mt-2 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>Hiking</p>
            </div>
            <div className='border py-8 mt-2 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>Top 10 Coffee Shops</p>
            </div>
            <div className='border py-8 mt-2 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>Family Fun</p>
            </div>

        </div>
        <div className='grid md:grid-cols-3 gap-2 px-2 text-center'>
            <div className='border py-8 mt-4 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>Romantic Nights</p>
            </div >
            <div className='border py-8 mt-4 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>10 Best Rooftop Bars</p>
            </div>
            <div className='border py-8 mt-4 rounded-xl shadow-xl'>
                <p className='text-2xl text-red-900'>Dancing</p>
            </div>

        </div>


    </div>
  )
}

export default Categories