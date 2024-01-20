import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Add.scss"
import dataContext from '../../context/dataContext';
import axios from 'axios';
import Table from "../../components/AddTables/Table"
import {Helmet} from "react-helmet";


const Add = () => {
  const {data, setData}=useContext(dataContext)
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      desc: '',
      price: '',
    },
    validationSchema: Yup.object({
      image: Yup.string()
        .required('Required'),
      name: Yup.string()
        .max(100, 'Must be 20 characters or less')
        .required('Required'),
      desc: Yup.string()
      .required('Required'),
      price: Yup.number()
        .required('Required'),
    }),
    onSubmit: values => {
      axios.post("http://localhost:1000/wines",values).then(res=>{
        setData([...data, res.data])
      })
      formik.resetForm()
    },

  
  });
  return (
    <div className='addForm' >
       <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
       <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image"></label>
       <input
         className='formInp'
         id="image"
         name="image"
         type="text"
         placeholder='Image URL'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
 
       <label htmlFor="name"></label>
       <input
         className='formInp'
         id="name"
         name="name"
         type="text"
         placeholder='Name'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
 
       <label htmlFor="desc"></label>
       <input
         className='formInp'
         id="desc"
         name="desc"
         type="desc"
         placeholder='Description'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.desc}
       />
       {formik.touched.desc && formik.errors.desc ? (
         <div>{formik.errors.desc}</div>
       ) : null}

<label htmlFor="price"></label>
       <input
         className='formInp'
         id="price"
         name="price"
         type="price"
         placeholder='Price'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button className='submitBtn' type="submit">Submit</button>
       
     </form>
     <Table/>
    </div>
  )
}

export default Add