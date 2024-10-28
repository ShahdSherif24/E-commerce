import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { authContext } from '../Context/AuthContext';


export default function Login() {

  let { token, setToken } = useContext(authContext)


  const navigator = useNavigate()

  function ValidateLogin(values) {
    const errors = {}


    //let TokenContext=useContext(UserTokenContext);

    if (!values.email) {
      errors.email = "Required"
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email"
    }


    if (!values.password) {
      errors.password = "Required"
    } else if (!/^[a-zA-Z0-9]{6,}$/.test(values.password)) {
      errors.password = "password invalid"
    }

    return errors
  }



  async function signInFunction(formValue) {
    console.log("hello from login", formValue);

    try {
      let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", formValue)
      console.log(data);
      if (data.message == "success") {
        localStorage.setItem("token", data.token)
        setToken(data.token)
        navigator("/home")
      }
    } catch (error) {
      console.log(error);
    }
  }


  let myForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: ValidateLogin,
    onSubmit: signInFunction
  }
  )




  return (
    <>
      <form onSubmit={myForm.handleSubmit} className="max-w-sm mx-auto">

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input type="email" id="email" onBlur={myForm.handleBlur} onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        {myForm.errors.email && myForm.touched.email ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.email}</span>
        </div> : ""}
        <div className="mb-5">
          <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Password</label>
          <input type="Password" id="password" onBlur={myForm.handleBlur} onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        {myForm.errors.password && myForm.touched.password ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.password}</span>
        </div> : ""}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>


    </>
  )
}






