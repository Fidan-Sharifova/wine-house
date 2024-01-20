import React from 'react'
import Slider from '../../components/Slider/Slider'
import Products from '../../components/Ourproducts/Products'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Slider/>
      <Products/>
    </div>
  )
}

export default Home