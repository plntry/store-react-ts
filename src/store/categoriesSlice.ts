import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '.'
import { baseUrl } from '../constants'

const initialState: ICategories = {
  categories: []
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories', async (_, thunkAPI) => {
    let data
    try {
      await axios
        .get(`${baseUrl}/products/categories`)
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

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder.addCase(fetchCategories.pending, (state, action) => {
        console.log(action.payload, 'pending')
      })
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        console.log(state.categories, 'extra')
      })
      builder.addCase(fetchCategories.rejected, (state, action) => {
        console.log(action.payload, 'rejected')
      })
    }
})

// export const { selectCategory } = categoriesSlice.actions

export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice
