import {useEffect, useState} from "react";
import axiosInstance from "../configs/axiosInstance";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

const Order = () => {
  const {id} = useParams();

  const [isLoading, setLoading] = useState(true)
  const [order, setOrder] = useState({
    user: {}
  })

  useEffect(() => {
    try {
      axiosInstance.get(`/order/${id}`)
        .then((res) => {
          setOrder(res.data.data)
        })
        .catch(() => {
          toast("Order not found", {
            type: "error"
          })
        })
        .finally(() => {
          setLoading(false)
        })
    } catch (e) {
      toast("Order not found", {
        type: "error"
      })
    }
  }, [])

  return isLoading ? "loading..." : 'id' in order ? (
    <>
      <h1 className="font-bold text-4xl">
        Order No: {order.id}
      </h1>
      <div>
        <p className="flex justify-between">
          <span>User Name</span>
          <span>{order.user.name}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping address</span>
          <span>{order.user.shipping_address}</span>
        </p>
        <p className="flex justify-between">
          <span>Order date</span>
          <span>{order.created_at}</span>
        </p>
        <p className="flex justify-between">
          <span>Order status</span>
          <span>{order.status}</span>
        </p>
      </div>
    </>
  ) : "order not found"
}

export default Order