import {useDispatch} from "react-redux";
import {changeQty} from "store/basket/actions";

const BasketCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleCount = (qty) => {
    dispatch(changeQty({
      id: product.id,
      qty: qty,
      isDelete: qty === 0
    }))
  }

  const handleIncreaseQty = () => {
    handleCount(product.qty + 1)
  }

  const handleDecreaseQty = () => {
    handleCount(product.qty - 1)
  }

  const handleQtyChange = (e) => {
    const { value } = e.target
    handleCount(Math.floor(Number(value)))
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 shadow-input">
      <div>
        <img src={product.img_url} alt={product.name} className="w-20" />
      </div>
      <div className="w-full col-span-3">
        <h4 className="text-zinc-500 items-center font-bold tracking-wide flex justify-between">
          <span>
            {product.name}
          </span>
          <span className="font-bold text-primary">
           € {product.price}
          </span>
        </h4>
        <div className="flex mt-4">
          <span onClick={handleDecreaseQty} className="p-2 px-4 border cursor-pointer select-none	">-</span>
          <span className="border">
            <input className="p-2 border border-none outline-none w-12" min="1" type="number" value={product.qty} onChange={handleQtyChange} />
          </span>
          <span onClick={handleIncreaseQty} className="p-2 px-4 border cursor-pointer select-none	">+</span>
        </div>
      </div>
    </div>
  )
}

export default BasketCard