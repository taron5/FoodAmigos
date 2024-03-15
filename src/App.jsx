import {ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useEffect} from "react";
import routes from "./routes";
import {setProducts} from "./store/basket/actions";

const router = createBrowserRouter(routes);


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const products = localStorage.getItem('products')
    if (products) {
      dispatch(setProducts(JSON.parse(products)))
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App