import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getData } from '../../../services/pr-service'
import { useAppDispatch } from '../../../store'
import { fetchProducts } from '../../../store/productsSlice'
import ProductsList from '../../ProductsList'

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch()

  //   const [products, setProducts] = useState<IProduct[] | undefined>()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  //   console.log(products, 'pr')

  return (
      <>
        <ProductsList />
      </>
  )
}

export default Catalog
