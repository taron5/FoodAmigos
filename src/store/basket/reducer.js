import {addProduct, changeQty, setProducts} from "./actions";
import {handleActions} from "redux-actions";

const defaultState = {
  products: []
}

const basketReducer = handleActions(
  {
    [addProduct]: (state, { payload }) => {

      let isExist = false
      const products = state.products.map((product) => {
        if (product.id === payload.id) {
          isExist = true
          product.qty = product.qty ? product.qty + 1 : 1
        }

        return product
      })

      if (!isExist) {
        payload.qty = 1
        products.push(payload)
      }

      localStorage.setItem('products', JSON.stringify(products))
      return { ...state, products }
    },
    [changeQty]: (state, { payload }) => {

      const products = payload.isDelete ?
        state.products.filter((product) => product.id !== payload.id)
        : state.products.map((product) => {

          if (product.id === payload.id) {
            product.qty = payload.qty
          }

          return product
        })

      localStorage.setItem('products', JSON.stringify(products))
      return { ...state, products }
    },
    [setProducts]: (state, { payload }) => ({ ...state, products: payload }),
  },
  defaultState
)

export default basketReducer