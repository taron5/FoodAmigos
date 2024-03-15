import {useSelector} from "react-redux";
import BasketCard from "./BasketCard";
import Drawer from "./ui/Drawer";
import {useMemo} from "react";
import {toast} from "react-toastify";
import axiosInstance from "../configs/axiosInstance";
import { useNavigate } from "react-router-dom";

const BasketDrawer = ({setIsBasketOpen}) => {
  const {products} = useSelector((state) => state.basket)
  const navigate = useNavigate();

  const productsTotal = useMemo(() => {
    return products.reduce((acc, product) => acc + product.qty * product.price, 0)
  }, [products])

  const handleCheckout = () => {
    const token = localStorage.getItem('access_token')
    if (token) {
      axiosInstance.post('/order', {
        products: products.map((product) => ({ qty: product.qty, id: product.id }))
      }).then((res) => {
        toast("Your order successfully created", {
          type: "success"
        })
        navigate(`/order/${res.data.id}`);
      })
    } else {
      setIsBasketOpen()
      toast("Please login", {
        type: "info"
      })
    }
  }

  return (
    <Drawer title={<><span className="icon-shopping-basket"/> basket</>} placement="right" onClose={setIsBasketOpen}>
      <div className="h-full">
        {products.length > 0 ? (
          <>
            <div className="flex flex-col gap-4 overflow-auto " style={{maxHeight: 'calc(100% - 230px)'}}>
              {products.map((product) => <BasketCard key={product.id} product={product}/>)}
            </div>
            <div>
              <div className="pt-2 text-sm">
                <p className="flex justify-between items-center">
                        <span>
                            Subtotal
                        </span>
                  <span>
                            € {productsTotal}
                        </span>
                </p>
                <p className="flex mt-2 justify-between items-center">
                         <span>
                            Shipping
                        </span>
                  <span>
                            Free
                        </span>
                </p>

                <p className="flex text-xl pt-2 border-t border-primary mt-4 justify-between items-center font-bold">
                         <span>
                            Total
                        </span>
                  <span>
                            € {productsTotal}
                        </span>
                </p>
              </div>
              <div className="mt-4">
                <button
                  className="px-8 py-4 w-full bg-primary text-white text-sm rounded-md font-semibold hover:bg-primary/[0.8] hover:shadow-lg"
                  onClick={handleCheckout}>
                  Go to checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p>
              <span className="icon-shopping-basket text-5xl"/>
            </p>
            <div>
              Card is empty
            </div>
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default BasketDrawer