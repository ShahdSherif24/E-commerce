import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default function RecentProducts() {



   
  return (
    <>
    <div class="row">
{product.map(product=><ProductItem key={product.id} product={product}/>)}


    </div>
    
    
    </>
     
    
  )
}
