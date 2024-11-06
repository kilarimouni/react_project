import React, { useState, useRef } from 'react';
import './menu-2.css';
import { menu_list } from "../../Images/data";
import ScreenSize from '../scrrensize/scrrensize';
import { Prev } from "react-bootstrap/esm/PageItem";

const ImageScroll = ({ category, setCategory }) => {
  const images = menu_list
  const ScrollRef = useRef()
  const imagesPerPage = Math.floor(ScreenSize() / 110);
  const [currentIndex, setCurrentIndex] = useState(0);

  const last_index = Math.ceil((menu_list.length - imagesPerPage) / 3)

  const scrollLeft = () => {
    ScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  };

  const scrollRight = () => {
    ScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
 
  const translateX = -(currentIndex * (100 / imagesPerPage));

  return (
    <div id="menu">
      <h1 className='menu-title'>Explore our menu</h1>
      <p className="menu-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential </p>
      <div className='pre-next-buttons'>
       
          <button onClick={scrollLeft}>&#129144;</button>
        

        <button onClick={scrollRight}>&#129146;</button>
      </div>
      <div className="image-scroll-container" ref={ScrollRef} style={{overflowX:"auto"}}>
        
          <div
            className="scroll-wrapper"  
            // style={{ transform: `translateX(${translateX}%)` }}
          >
            {images.map((image, index) => (
              <div onClick={() => setCategory(Prev === image.menu_name ? "All" : image.menu_name)} key={index} className='image-name'>
                <img key={index} src={image.menu_image} alt={`Image ${index}`} id="scroll-image" className={category === image.menu_name ? "active" : ""} />
                <p>{image.menu_name}</p>
              </div>
            ))}
          </div>
        
      </div>
      {console.log(currentIndex, last_index, menu_list.length)}

    </div>
  );
};

export default ImageScroll;