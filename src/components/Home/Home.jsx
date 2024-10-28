import React, { useContext, useEffect } from 'react'
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts'
import RecentProducts from '../RecentProducts/RecentProducts'
import Categories from '../Categories/Categories'
import MainSlider from '../MainSlider/MainSlider'


export default function Home(){
  useEffect(()=>{

  },[])

  


  return (
    <>
    <MainSlider/>
    <Categories/>
      
<RecommendedProducts/>



    </>
  )
}