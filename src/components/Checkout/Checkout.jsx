import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'




export default function Checkout() {

  let navigate = useNavigate()
  let { cartId } = useParams()
  const headers = {
    token: window.localStorage.getItem('token')
  }


  async function cashOnDelievry(initialValues) {
    try {
      
      const data = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId} `, initialValues, { headers })
      console.log(data);

      if (data?.data.status == "success") {
        navigate(`/Order`)
       // console.log(data.data);
        
        
        console.log(cartId);

      } else {
        //console.log("ay7aga");


      }


      // return res.data
    } catch (err) { 
     // console.log(err);
      
    }

  }
//    async function onlinePayment(url){

//     try {
      
//       const data = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,url)
//       console.log(data);

//       if (data?.data.status == "success") {
//         console.log(data);
        
//         window.location.href=res.session.url
//       } else {
//         //console.log("ay7aga");


//       }


//       // return res.data
//     } catch (err) { 
//      // console.log(err);
      
//     }
  
//  }
 
 














  // async function pay(cartId, initialValues) {

  //   let data = await cashOnDelievry(cartId, initialValues)
  //   console.log(data);

  //   if (data?.data.status == "success") {
  //     navigate(/Order)
  //     console.log(cartId);

  //   } else {
  //     //console.log("ay7aga");


  //   }


    // useEffect(() => {
    // onlinePayment()
    // }, [])
  

  let myForm = useFormik({
    initialValues: {
      details: "details",
      phone: "",
      city: "",

    },

    onSubmit: cashOnDelievry
  }
  )
  return (
    <>
      <form onSubmit={myForm.handleSubmit} className=" mx-auto">
        <div className='w-[50%] mx-auto '>
          <h1 className='text-center text-xl mt-5'> Checkout Now</h1>


          <div className="mb-5">
            <label htmlFor="details" className="block mb-2 text-sm font-medium text-white dark:text-black">details</label>
            <input type="text" id="details" onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white dark:text-black">phone</label>
            <input type="tel" id="phone" onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="mb-5">
            <label htmlFor="city" className="block mb-2 text-sm font-medium text-white dark:text-black">city</label>
            <input type="text" id="city" onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-white w-full bg-blue-500 hover:bg-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">pay</button>
        </div>

      </form>

    </>
  )
}


