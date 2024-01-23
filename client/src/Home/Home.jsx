import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import FavouriteBook from './FavouriteBook'

function Home() {
  return (
    <div>
      <div>
        <Banner />
        <BestSeller /> 
        <FavouriteBook />
      </div>
    </div>
  )
}

export default Home