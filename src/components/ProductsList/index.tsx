import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/productsSlice'
import ProductItem from '../ProductItem'

const ProductsList: React.FC = () => {
  const products = Object.values(useSelector(selectProducts))[0]
  console.log(Array.isArray(products), 'pr')
  //   console.log(products?[products], 'pro')

  return (
    <Box sx={{ display: 'grid' }} component='div'>
      {(products).map((product: any) => {
        return (
            <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
            />
        )
      })}
    </Box>
  )
}

export default ProductsList
