import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {


  const navigator = useNavigate()

  function ValidateRegister(values) {
    const errors = {}


    if (!values.name) {
      errors.name = "Required"
    } else if (!/^[A-Z][a-z]{3,}$/.test(values.name)) {
      errors.name = "Name must be start with capital letters"
    }


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


    if (!values.rePassword) {
      errors.rePassword = "Required"
    } else if (values.password != values.rePassword) {
      errors.rePassword = "rePassword should match password"
    }


    if (!values.phone) {
      errors.phone = "Required"
    } else if (!/^01[0125][0-9]{8}$/.test(values.phone)) {
      errors.phone = "Phone must be egyptian number"
    }

    
    return errors
  }



  async function userRegister(formValue) {
    console.log("hello from register", formValue);

    try {
      let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", formValue)
      console.log(data);
      if (data.message == "success") {
        navigator("/login")
      }
    } catch (error) {
      console.log(error);
    }
  }


  let myForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    validate: ValidateRegister,
    onSubmit: userRegister
  }
  )




  return (
    <>
      <form onSubmit={myForm.handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your name</label>
          <input type="text" id="name" onBlur={myForm.handleBlur} onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        {myForm.errors.name && myForm.touched.name ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.name}</span>
        </div> : ""}

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
        {myForm.errors.password && myForm.touched.password ?  <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.password}</span>
        </div> : ""}

        <div className="mb-5">
          <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your rePassword</label>
          <input type="password" id="rePassword" onBlur={myForm.handleBlur} onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        {myForm.errors.rePassword && myForm.touched.rePassword ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.rePassword}</span>
        </div> : ""}

        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your phone</label>
          <input type="tel" id="phone" onBlur={myForm.handleBlur} onChange={myForm.handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        {myForm.errors.phone && myForm.touched.phone ? <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-black dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">{myForm.errors.phone}</span>
        </div> : ""}

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>


    </>
  )
}






