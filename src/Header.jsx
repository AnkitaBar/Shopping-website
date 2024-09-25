import React from 'react'

const Header = () => {
  return (
    <div>
       {/* Header with Home and Category links */}
       <header style={styles.header}>
          <nav>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/category" style={styles.link}>Category</Link>
          </nav>
        </header>
      
    </div>
  )
}

const styles = {
    header: {
      padding: '10px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    },
    link: {
      margin: '0 15px',
      textDecoration: 'none',
      color: 'black',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };
export default Header
