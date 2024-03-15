import { createAction } from 'redux-actions';

export const addProduct = createAction("ADD_PRODUCT_TO_BASKET")
export const changeQty = createAction("CHANGE_PRODUCT_QTY")
export const setProducts = createAction("SET_PRODUCTS")