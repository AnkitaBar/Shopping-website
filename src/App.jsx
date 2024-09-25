// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import ProductCategoryList from './ProductCategoryList'; // Assuming you want to navigate to the list of categories
// import CategoryProducts from './CategoryProducts';
// import ProductList from './ProductList';
// import Details from './Details';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Header with Home and Category links */}
//         <header style={styles.header}>
//           <nav>
//             <Link to="/" style={styles.link}>Home</Link>
//             <Link to="/categories" style={styles.link}>Categories</Link> {/* Updated Link */}
//           </nav>
//         </header>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/categories" element={<ProductCategoryList />} /> {/* Added Category List Route */}
//           <Route path="/category/:slug" element={<CategoryProducts />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/products/:id" element={<Details />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // Styling for header and links
// const styles = {
//   header: {
//     padding: '10px',
//     backgroundColor: 'Black',
//     textAlign: 'center',
//   },
//   link: {
//     margin: '0 15px',
//     textDecoration: 'none',
//     color: 'White',
//     cursor: 'pointer',
//     fontSize: '20px',
//   },
// };

// export default App;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ProductCategoryList from './ProductCategoryList';
import CategoryProducts from './CategoryProduct';
import ProductList from './ProductList';
import Details from './Details';

const App = () => {
  return (
    <Router>
      <div>
        <header style={styles.header}>
          <nav>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/category" style={styles.link}>Categories</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<ProductCategoryList />} />
          <Route path="/category/:slug" element={<CategoryProducts />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Details />} /> 
        </Routes>


        
      </div>
    </Router>
  );
};

const styles = {
  header: {
    padding: '10px',
    backgroundColor: 'Black',
    textAlign: 'center',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: 'White',
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default App;
