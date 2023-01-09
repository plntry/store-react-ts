import { Box, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'

const ProductItem: React.FC<IProduct> = ({ id, title, price, description, category, image, rating }: IProduct) => {
  return (
    <Card raised sx={{
      zIndex: '5',
      width: '400px',
      height: 'auto',
      margin: '0 auto',
      padding: '0.1em',
      maxWidth: '100%'
    }}>
      <CardActionArea sx={{ height: '100%' }}>

        <CardMedia
          component="img"
          image={image}
          alt="product"
          height="220"
          sx={{ padding: '1em 0 1em', objectFit: 'contain' }}
        />
        <CardContent>
          <Typography color='dark.main' gutterBottom variant="h6" component="div" sx={{ fontWeight: '600' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }} component='div'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} component='div'>
              <Box sx={{ display: 'flex', alignItems: 'center' }} component='div'>
              <Rating precision={0.5} value={rating.rate} readOnly />

                <Typography variant="body2" color="text.secondary">
                  {rating.rate}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {rating.count} customers reviews
              </Typography>
            </Box>
            <Typography sx={{ color: 'primary.main', paddingRight: '.8rem', fontWeight: '700', fontSize: '32px', textAlign: 'right' }} variant="body2" color="text.secondary">
              ${price}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductItem
