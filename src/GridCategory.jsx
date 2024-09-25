import { Card, CardActionArea, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const GridChildListings = ({item}) => {
  return (
    <Grid2 size={{ xs: 2, sm: 4, md: 4 }} sx={{display:'flex',justifyContent:'center'}}>
            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/product/${item.id}`} style={{textDecoration:'none'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="auto"
                    image={item.thumbnail}
                    alt="green iguana"
                    style={{
                        objectFit:'contain',
                    }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" color="text.primary" component="div">
                        {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Price - ${item.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description.substring(0,50)+'...'}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
    </Grid2>
  )
}

export default GridChildListings