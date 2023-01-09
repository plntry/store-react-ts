import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/productsSlice'
import ProductItem from '../ProductItem'

const ProductsContainer = styled('div')(({ theme }) => ({
  margin: '5.5rem 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(22.5rem, 1fr))',
  alignItems: 'stretch',
  justifyItems: 'center',
  gridGap: '25px',
  [theme.breakpoints.up('sm')]: {
    padding: '0 8rem'
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    padding: '0 10rem'
  }
}))

const ProductsList: React.FC = () => {
  const products = Object.values(useSelector(selectProducts))[0]

  return (
    <ProductsContainer>
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
    </ProductsContainer>
  )
}

export default ProductsList
