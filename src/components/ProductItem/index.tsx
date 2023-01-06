import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const ProductItem: React.FC<IProduct> = ({ id, title, price, description, category, image, rating }: IProduct) => {
  return (
    <Card sx={{ zIndex: '5', margin: '5.5rem 2rem', maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductItem
