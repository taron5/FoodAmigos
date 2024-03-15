import {useDispatch} from "react-redux";
import {addProduct} from "store/basket/actions";
import {toast} from "react-toastify";

const CardFooter = ({ item }) => {
  const dispatch = useDispatch()
  const notify = () => toast("Added to basket", {
    type: "success"
  });


  const handleAddToCard = () => {
    dispatch(addProduct(item))
    notify()
  }

  return (
    <div className="mt-4">
      <button
        onClick={handleAddToCard}
        className="px-8 py-2 w-full bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
        Add to Card
      </button>
    </div>
  )
}

export default CardFooter