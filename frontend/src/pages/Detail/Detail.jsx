import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import "./Detail.scss"
import {Helmet} from "react-helmet";


const Detail = () => {
  const {id}=useParams()
 const [detail,setDetail]=useState({})

  useEffect(()=>{
    axios.get(`http://localhost:1000/wines/${id}`).then(res=>{
      setDetail(res.data)
    })
  }, [])
  return (
    <div className='detailPage'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={detail.image} alt="" />
      <div className="cardDetails">
        <h1>{detail.name}</h1>
        <p>{detail.desc}</p>
        <p>Price: {detail.price}$</p>
        <button>Add to Wishlist</button>
      </div>
    </div>
  )
}

export default Detail


