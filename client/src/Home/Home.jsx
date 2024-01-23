import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import FavouriteBook from './FavouriteBook'
import PromoBanner from './PromoBanner'
import Others from './Others'
import Review from './Review'

function Home() {
  return (
    <div>
      <div>
        <Banner />
        <BestSeller /> 
        <FavouriteBook />
        <PromoBanner />
        <Others/>
        <Review />
      </div>
    </div>
  )
}

export default Home