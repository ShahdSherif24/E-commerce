import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick' ;

export default function Categories() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3
  };





let[Categories,setCategories]=useState([])

useEffect(()=>{
getCategories()
},[])


      function getCategories(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(({data})=>setCategories(data.data))
        .catch(err=>console.log(err));
        
    
      }



  return (
   <>
<div className="my-6">
<Slider {...settings} > 
   {Categories.map(category=><div>
    <img src={category.image} className="w-full h-[300px]" alt=""/>
    <h2>{}{category.name}</h2>
   </div>)}


    </Slider> 

</div>

   
   
   </>
  )
}
