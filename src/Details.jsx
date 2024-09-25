// Details.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia } from '@mui/material';

const Details = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details based on ID
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return <Typography variant="h5">Product not found!</Typography>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 2 }}>
            {product.brand}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary">
            Price: ${product.price}
          </Typography>
          <Typography variant="h6" color="secondary" sx={{ marginTop: 2 }}>
            Rating: {product.rating} / 5
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Details;
