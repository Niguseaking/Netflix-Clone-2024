import React from 'react'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import Footer from '../../Component/Footer/Footer'
import RowList from '../../Rows/RowList/RowList'
const Home = () => {
  return (
    <div>
        <Header />
        <Banner/>
        <RowList/>
        <Footer/>
    </div>
  )
}

export default Home
