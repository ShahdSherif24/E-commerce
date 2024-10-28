import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'
import { Link } from 'react-router-dom';



export default function ProductItem({product,addCart,currentId,isloading}) {
 console.log(product);

//let[product,setproduct]=useState()
  return (
    <>

      {  product?.data?.map((product) => (
        <div className='w-2/12 ' >


          <div className="product hover:rounded-md overflow-hidden p-1  flex flex-col gap-3 justify-center items-center h-full">

            <Link to={`/ProductDetails/${product.id}/${product.category._id}`}>

              <img src={product.imageCover} alt="" className=' w-full ' />
              <span className='font-medium  text-lg'>{product.category?.name}</span>
              <h2 className='text-xl font-semibold '>{product.title.substring(0, 14)}</h2>
              <div className='flex flex-col justify-center items-center gap-2'>

                <span>{product.ratingsAverage}</span>
                <span>{product.price} EGP</span>

              </div>

            </Link>

            <button className='btn' onClick={ ()=>addCart(product.id)}>
{  isloading && currentId[product.id]? <i className='fa fa-spinner fa-spin'></i>:<span>Add to cart</span>}</button>
          

          </div>
        </div>
      ))
      }







    </>
  )
}
