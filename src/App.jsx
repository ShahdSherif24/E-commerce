import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout'
import RecentProducts from './components/RecentProducts/RecentProducts'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/ProductDetails/ProductDetails'
import AuthContextProvider from './components/Context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartContextProvider, { CartContext } from './Context/CartContext'
import { Toaster } from 'react-hot-toast';
import CounterContextProvider from './Context/CounterContext'
import Categories from './components/Categories/Categories'
import Subcategories from './components/Subcategories/Subcategories'
import CategoriesSection from './components/Categoriess/CategoriesSection'
import Checkout from "./components/Checkout/Checkout"
import Order from "./components/Order/Order"



let query = new QueryClient()

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { index: true, element: <Login /> },
        { path: "home", element: <Home /> },
        { path: "products", element: <RecentProducts /> },
        { path: "brands", element: <Brands /> },
        { path: "register", element: <Register /> },
        { path: "footer", element: <Footer /> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <Cart /> },
        { path: "ProductDetails/:id/:categoryId", element: <ProductDetails /> },
        { path: "categories", element: <Categories /> },
        { path: "categoriesSection", element: <CategoriesSection /> },
        { path: 'Subcategories', element: <Subcategories /> },
        {path:'checkout/:cartId', element:<Checkout/>},
        
       {path:'Order',element:<Order/>}
       
      ]
    }
  ])

  return (<>


    <QueryClientProvider client={query}>
      <AuthContextProvider>
        <CartContextProvider>
          <CounterContextProvider>
            <RouterProvider router={myRouter} />
          </CounterContextProvider>
        </CartContextProvider>
        <Toaster />
      </AuthContextProvider>
    </QueryClientProvider>
  </>)
}
