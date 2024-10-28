import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart(props) {
  //console.log(props);
   let { getCart,removeProduct,updateProductCount,setCartId , cartId} = useContext(CartContext)
   let [cartInfo, setCartInfo] = useState(null)
   let navigate=useNavigate()

  useEffect(() => {
    getcartInfo()
  }, [])

 
 async function getcartInfo(){
    let res= await getCart()
   console.log(res);
   setCartInfo(res);
   setCartId(res.data?._id)
   console.log(res.data);
   
   

   
}
   
 async function removeItem(id){
  let res=await removeProduct(id)
  console.log(res);
  setCartInfo(res)
  
}


 async function updateProduct(id,count){
 let res=await updateProductCount(id,count)
 console.log(res);
 setCartInfo(res)
 
}


function goToCheckout(){
navigate(`/checkout/${cartId}`)
}


  return (
    <>


<div className=" w-[70%] mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
  <h1 className='text-4xl text-gray-800  font-bold text-center mb-4'>Shipping Cart</h1>
  <div className="flex justify-between px-7">
    <h2 className='text-2xl'>Total Cart Item : {cartInfo?.numOfCartItems}</h2>

    <h2 className='text-2xl'>Total Cart  :{cartInfo?.data.totalCartPrice} </h2>
  </div>
    <table className=" w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead className="text-xs text-black uppercase bg-gray-300 dark:bg-gray-300 dark:text-black">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className="px-6 py-3">
                    Qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {cartInfo?.data.products.filter(ele=>ele.count!=0).map(ele=><tr className="bg-white border-b dark:bg-white dark:border-white hover:bg-gray-50 dark:hover:bg-white">
                <td className="p-4">
                    <img src={ele.product.imageCover} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                </td>
                <td className="px-6 py-4 font-semibold text-black dark:text-black">
                    {ele.product.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <button onClick={()=>updateProduct(ele.product.id,ele.count-1)} class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                          <span>{ele.count}</span>
                            {/* <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required /> */}
                        </div>
                        <button onClick={()=>updateProduct(ele.product.id,ele.count+1)} class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Quantity button</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-black dark:text-white">
                   {ele.price}
                </td>
                <td className="px-6 py-4">
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>removeItem(ele.product.id)} >Remove</button>
                </td>
            </tr> )}
            
          
        </tbody>
    </table>

    <button className='btn3' onClick={goToCheckout}>Continue to Checkout</button>
</div>


    
    </>
  )
}





