import React from 'react'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import RowList from '../../Rows/RowList/Rowlist'
import Footer from '../../Component/Footer/Footer'
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
