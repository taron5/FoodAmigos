import Card from "components/ui/card/Index";
import React, {useEffect, useState} from "react";
import axiosInstance from "configs/axiosInstance";
import Skeleton from "components/ui/Skeleton";

const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosInstance.get('/products').then((res) => {
      setProducts(res.data.data);
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
   <>
     <h1 className="text-bold text-4xl border-b-2 border-primary pb-4 max-w-xs">
       Products
     </h1>
     { isLoading ? <div className="gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full py-10">
       {Array.from(new Array(6)).map((_, index) => (
         <Skeleton key={index} />
       ))}
     </div> : <Card items={products} />
     }
   </>
  )
}

export default Home