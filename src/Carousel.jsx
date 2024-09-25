// Carousel.jsx (Rename this file as CustomCarousel.jsx)
import React from 'react';
import Carousel from 'react-material-ui-carousel'; // Rename this import to MuiCarousel below

const CustomCarousel = () => { // Rename your custom component to avoid conflict
  const items = [
    {
      name: "Slide 1",
      imgUrl: "https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
    },
    {
      name: "Slide 2",
      imgUrl: "https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg"
    },
    {
      name: "Slide 3",
      imgUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
    }
  ];

  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <div key={i}>
            <img src={item.imgUrl} alt={item.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel; // Export with the new name
