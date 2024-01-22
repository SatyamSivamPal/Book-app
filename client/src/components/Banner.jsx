import React from 'react'

function Banner() {
  return (
    <div className='px-4
     lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='space-y-8 md:w-1/2 h-full'>
                <h2 className='text-5xl font-bold leading-sung text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'> Bookify is more than just a website; it's a celebration of words, a sanctuary for book lovers, and a treasure trove of literary wonders. Whether you're an avid reader, a casual browser, or a book enthusiast seeking your next great read, we've got something for everyone.</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className='py-2
                    px-2 rounded-md outline-none' />
                    <button className='bg-blue-700 px-6 py-2 ml-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-md'>Search</button>
                </div>
            </div>
            <div>Right-side</div>
        </div>
     </div>
  )
}

export default Banner