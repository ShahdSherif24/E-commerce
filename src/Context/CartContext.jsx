import axios from 'axios'
import React, { createContext, useState } from 'react'


export let CartContext = createContext()
const headers = {
    token: window.localStorage.getItem('token')



}
async function addProductToCart(productId) {

    try {
        const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
            { productId },

            { headers }

        )
        return res.data
    } catch (err) {
        return err.response.data
    }

}


async function getCart() {
    try {
        const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,


            { headers }

        )
        return res.data
        console.log(res.data);

    } catch (err) {
        return err.res.data
    }
}

async function removeProduct(id) {

    try {
        const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers })
        return res.data
    } catch (err) {
        return err.res.data
    }
}



async function updateProductCount(id, count) {

    try {
        const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count }, { headers })
        return res.data
    } catch (err) {
        return err.res.data
    }
}

// async function cashOnDelievry(cartId, shippingAdress) {
//     try {

//         const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, 
//             { shippingAdress }, { count }, { headers })
//         console.log(res.cartId, shippingAdress, "cartId", "shippingAdress"); //fih moshkla





//         return res.data
//     } catch (err) {
//         return err.res?.data
//     }

// }




export default function CartContextProvider({ children }) {
    let [cartId, setCartId] = useState()

    return <CartContext.Provider value={{ cartId, setCartId, addProductToCart, getCart, removeProduct, updateProductCount }}>
        {/* return <CartContext.Provider value={{count}}> */}
        {children}

    </CartContext.Provider>
}






// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { UserContext } from './UserContext'
// import axios from 'axios'

// export const CartContext = createContext()

// export default function CartContextProvider({ children }) {
//     const { token } = useContext(UserContext)
//     const [cartItemsNum, setCartItemsNum] = useState('0')
//     const headers = {
//         token
//     }
//     useEffect(()=> {
//         numItems()
//     } , [])


//     function getLoggedUserCart() {
//         try {
//             return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
//                 headers
//             })
//         } catch (error) {
//             console.log(error);

//         }
//     }
//     function addProductToCart(id) {
//         try {
//             return axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
//                 productId: id
//             }, {
//                 headers
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
//     function deleteProduct(id) {
//         try {
//             return axios.delete('https://ecommerce.routemisr.com/api/v1/cart/${id}', {
//                 headers
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
//     function updateItemCounter(id , count) {
//         try {
//             return axios.put('https://ecommerce.routemisr.com/api/v1/cart/${id}', { count: count }, {
//                 headers
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
//     function deleteUserCart() {
//         try {
//             return axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
//                 headers
//             })
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }

//     async function numItems() {
//         const {data} = await getLoggedUserCart()
//         if (data.status == 'success') {
//             setCartItemsNum(data.numOfCartItems)
//         }
//     }






//     return <CartContext.Provider value={{ getLoggedUserCart, addProductToCart, deleteProduct , updateItemCounter , deleteUserCart , cartItemsNum , setCartItemsNum}}>
//         {children}
//     </CartContext.Provider>
// }