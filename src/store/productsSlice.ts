import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '.'
import { baseUrl } from '../constants'

const initialState: IProducts = {
  products: []
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async (_, thunkAPI) => {
    let data
    try {
      await axios
        .get(`${baseUrl}/products`)
        .then((res) => {
          data = res.data
        })
        .catch((err) => { console.log(err) })
      if (data) return data
      console.error('Cannot get data')
    } catch (error: any | undefined) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  })

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state)
    }
    // addItemToCart: (state, action) => {
    //   if (state.products.some(el => el.id === action.payload.id)) {
    //     state.products.find(el => el.id === action.payload.id).quantity++
    //     state.products.find(el => el.id === action.payload.id).totalPrice = action.payload.price * state.products.find(el => el.id === action.payload.id).quantity
    //   } else {
    //     state.products.push(
    //       {
    //         id: action.payload.id,
    //         title: action.payload.title,
    //         price: action.payload.price,
    //         quantity: 1,
    //         totalPrice: action.payload.price
    //       }
    //     )
    //   }

    //   state.totalQuantity++
    // },

    // removeItemFromCart: (state, action) => {
    //   if (state.products.find(el => el.id === action.payload).quantity === 1) {
    //     state.products = state.products.filter(el => el.id !== action.payload)

    //     state.totalQuantity--
    //   } else {
    //     state.products.find(el => el.id === action.payload).quantity--
    //     state.products.find(el => el.id === action.payload).totalPrice = state.products.find(el => el.id === action.payload).price * state.products.find(el => el.id === action.payload).quantity

    //     state.totalQuantity--
    //   }
    // }
  },
  extraReducers:
    (builder) => {
      builder.addCase(fetchProducts.pending, (state, action) => {
        console.log(action.payload, 'pending')
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        console.log(state.products, 'extra')
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.payload, 'rejected')
      })
    }
})

export const { add } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products
// export const selectTotalQuantity = (state) => state.cart.totalQuantity

export const productsActions = productsSlice.actions

export default productsSlice
