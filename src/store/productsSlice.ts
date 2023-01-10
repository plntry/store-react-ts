import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '.'
import { baseUrl } from '../constants'
import { selectCategories } from './categoriesSlice'

const initialState: IProductsSliceInitState = {
  products: [],
  selectedCategory: ''
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async (_, thunkAPI) => {
    let data
    try {
      await axios
        .get(`${baseUrl}/products/${''}`)
        .then((res) => {
          data = res.data
          console.log()
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
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload.toLowerCase()
      console.log(state.selectedCategory, 'selected')
      // if (state.products.find(el => el.id === action.payload).quantity === 1) {
      //       state.products = state.products.filter(el => el.id !== action.payload)

      //       state.totalQuantity--
      //     } else {
      //       state.products.find(el => el.id === action.payload).quantity--
      //       state.products.find(el => el.id === action.payload).totalPrice = state.products.find(el => el.id === action.payload).price * state.products.find(el => el.id === action.payload).quantity

      //       state.totalQuantity--
      //     }
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
        // console.log(getState().selectedCategory, 'selll')
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.payload, 'rejected')
      })
    }
})

export const { filterByCategory } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products
// export const selectTotalQuantity = (state) => state.cart.totalQuantity

export default productsSlice
