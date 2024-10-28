import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { useQuery } from '@tanstack/react-query'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'

//import{CounterContext} from '../../CounterContext'







 export default function RecommendedProducts() {

  useEffect(() => {
    getProducts()
  }, [])

  let [products, setProducts] = useState()

let[isloading,setIsLoading]=useState(false)
let[currentId,setCurrentId]=useState([])

let{addProductToCart}=useContext(CartContext)



 async function addToCartItem(id){
  console.log(id);
  currentId.length=0
   setIsLoading(true)

   let x=structuredClone(currentId)
   let btee5=x.pop()
   console.log(x,btee5);
   
   setCurrentId(x)
   //currentId[id]=true
  setTimeout(() => {
    currentId[id]=true;
    setCurrentId(currentId)
  },10)

setTimeout(() => {
  console.log(currentId);
  
},1000);


  //  setCurrentId(currentId)
  //  console.log(currentId);
   
   let data=await addProductToCart(id);
   if (data.status=='success'){
    toast.success(data.message)
    
   }else{
    console.log("error");
    toast.error(data.message.data)
   }
 
  
  

}





  function getProducts() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
      .then(res => {
        console.log((res.data));
        console.log(setProducts(res.data))
        

      })
      .catch(err => console.log(err)
      )



  }



// function getProducts(){
//   return axios.get('https://ecommerce.routemisr.com/api/v1/products')
// }
// let x=useQuery({
// queryKey:[Products],
// queryFn:getProducts
// })
// console.log(x);






  //let [count, setCount] = useState(0)
  //let { Counter } = useContext(CounterContext)
 // console.log(Counter);







   
  return (
    <>
    <div className='row'>
    
    {products?.data.map( product=><ProductItem   key={product.id} isloading={isloading}  currentId={currentId} addCart={addToCartItem}  product={products}/>)


}

    
    
    
    
</div>
    
    </>
  )

 }