// // ProductList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box, TextField } from '@mui/material';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [visibleProducts, setVisibleProducts] = useState(10); // Show 10 products initially
//   const [query, setQuery] = useState(''); // State to manage the search query

//   // Fetch all products when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Function to fetch products or search results
//   const fetchProducts = (searchQuery = '') => {
//     setLoading(true);
//     const url = searchQuery
//       ? `https://dummyjson.com/products/search?q=${searchQuery}`
//       : 'https://dummyjson.com/products';

//     axios.get(url)
//       .then((response) => {
//         setProducts(response.data.products);
//         setVisibleProducts(10); // Reset to show only 10 products initially
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching the products", error);
//         setLoading(false);
//       });
//   };

//   // Function to load more products
//   const loadMoreProducts = () => {
//     setVisibleProducts(prevVisible => prevVisible + 10); // Load more 10 products
//   };

//   // Handle form submission for search
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     fetchProducts(query);
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Search Bar */}
//       <Box mb={3}>
//         <form onSubmit={handleSearchSubmit}>
//           <TextField
//             label="Search Products"
//             variant="outlined"
//             fullWidth
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </form>
//       </Box>

//       {/* Products Grid */}
//       <Grid container spacing={3}>
//         {products.slice(0, visibleProducts).map((product) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={product.thumbnail}
//                 alt={product.title}
//               />
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {product.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {product.description}
//                 </Typography>
//                 <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
//                   ${product.price}
//                 </Typography>

//                 {/* Add Link to Details Page */}
//                 <Button
//                   variant="contained"
//                   component={Link}
//                   to={`/products/${product.id}`} // Dynamically link to the Details page
//                   sx={{ marginTop: 2 }}
//                 >
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Load More Button */}
//       {visibleProducts < products.length && (
//         <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
//           <Button variant="contained" onClick={loadMoreProducts}>
//             Load More
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProductList;

// ProductList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress, Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10); // Show 10 products initially
  const [query, setQuery] = useState(''); // State to manage the search query

  // Fetch all products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products or search results
  const fetchProducts = (searchQuery = '', sort = '') => {
    setLoading(true);
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${searchQuery}`
      : `https://dummyjson.com/products${sort}`;

    axios.get(url)
      .then((response) => {
        setProducts(response.data.products);
        setVisibleProducts(10); // Reset to show only 10 products initially
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products", error);
        setLoading(false);
      });
  };

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleProducts(prevVisible => prevVisible + 10); // Load more 10 products
  };

  // Handle form submission for search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchProducts(query);
  };

  // Function to handle sorting
  const handleSortAscending = () => {
    fetchProducts('', '?sortBy=title&order=asc');
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      {/* Search Bar */}
      <Box mb={3}>
        <form onSubmit={handleSearchSubmit}>
          <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </Box>

      {/* Sort Ascending Button */}
      <Box mb={3}>
        <Button variant="contained" color="primary" onClick={handleSortAscending}>
          Sort Ascending
        </Button>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.slice(0, visibleProducts).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                  ${product.price}
                </Typography>

                {/* Add Link to Details Page */}
                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${product.id}`} // Dynamically link to the Details page
                  sx={{ marginTop: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {visibleProducts < products.length && (
        <Box display="flex" justifyContent="center" sx={{ marginTop: 3 }}>
          <Button variant="contained" onClick={loadMoreProducts}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
