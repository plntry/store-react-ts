import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../store'
import { fetchProducts } from '../../../store/productsSlice'
import ProductsList from '../../ProductsList'

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
      <>
        <ProductsList />
      </>
  )
}

export default Catalog
