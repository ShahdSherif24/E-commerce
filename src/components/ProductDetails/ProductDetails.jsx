import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem';
import Slider from 'react-slick' ;
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';



export default function ProductDetails() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };




let{addProductToCart}=useContext(CartContext)

  let [ProductDetails, setProductDetails] = useState()
  let[relatedProducts,setRelatedProducts]=useState([])
   

  let { id , categoryId} = useParams()
  console.log(categoryId);
  





  useEffect(() => {
    getProductDetails()
     getRelatedProducts()
  }, [])

  // useEffect(() => {
  //   getProductDetails()
  // }, [id])


  function getProductDetails() {

    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => setProductDetails(data.data))

      .catch(({ err }) => console.log(err))





  }

   

  async function addToCartItem(id){
    console.log(id);
  let data= await addProductToCart(id)
  //console.log(data);
  if (data.status=='success'){
  toast.success(data.message)
  
 }else{
  console.log("error");
  toast.error(data.message.data)
 }

}



function getRelatedProducts(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then(({ data }) => {
       let res=(data.data.filter(ele=>ele.category._id==categoryId));
        setRelatedProducts(res)
    
    })
      .catch(({ err }) => console.log(err))


}



  return (
    <>

<Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>






      <div className="row items-center">

        <div className="w-1/4">
          <img src={ProductDetails?.imageCover} className='w-full' alt="" />
        </div>
        <div className='justify-center w-3/4'>
        <h2 className='text-4xl font-light mt-8'>{ProductDetails?.title}</h2>
        <p className='font-light text-gray-500'>{ProductDetails?.description}</p><br></br>
        <span>{ProductDetails?.category.name}</span><br></br>
          <span>{ProductDetails?.price} EGP</span><br></br>
          <span>{ProductDetails?.ratingsAverage} <i className='fa fa-star text-yellow-300'></i></span>

        </div>
        <button className='btn2'onClick={()=>addToCartItem(ProductDetails.id)} >+Add to cart</button>
      </div>

{/* <div className="row">
<h2 className='text-cyan-600 mt-6'>Related Products</h2>
  {relatedProducts?.map(product=><ProductItem product={product}/>)}
</div> */}
  
    </>
  )
}

{/* 
//param=> lazem ytktb f url
//query=> msh lazem ytktb f url w bywdiny 3l path 3ady */}