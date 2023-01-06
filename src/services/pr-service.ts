import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const dataUrl = 'https://fakestoreapi.com'
// const pictureUrl = 'https://starwars-visualguide.com/assets/img'

export async function getData (url = '') {
  let data
  try {
    await axios
      .get(`${dataUrl}${url}`)
      .then((res) => {
        data = res.data
        console.log(res.data, 'res data')
      })
      .catch((err) => { console.log(err) })
    if (data) return data
    console.error('Cannot get data')
  } catch (error: any | undefined) {
    throw new Error(error)
  }
}

// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts', async (url: string, thunkAPI) => {
//     let data
//     try {
//       await axios
//         .get(`${dataUrl}${url}`)
//         .then((res) => {
//           data = res.data
//         })
//         .catch((err) => { console.log(err) })
//       if (data) return data
//       console.error('Cannot get data'); return
//     } catch (error: any | undefined) {
//       return thunkAPI.rejectWithValue({ error: error.message })
//     }
//   })

// export async function getPicture (imgPath = '', id = 1) {
//   let url
//   try {
//     await axios
//       .get(`${pictureUrl}${imgPath}/${id}.jpg`)
//       .then((res) => { url = res.config.url })
//       .catch((err) => { console.log(err) })
//     if (url) return url
//     console.error('Cannot get img url'); return
//   } catch (error: any | undefined) {
//     throw new Error(error)
//   }
// }
