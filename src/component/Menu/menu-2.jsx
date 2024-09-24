import React, { useState } from 'react';
import './menu-2.css';
import { menu_list } from "../../Images/data";
import ScreenSize from '../scrrensize/scrrensize';

const ImageScroll = () => {
  const images = menu_list

  const imagesPerPage = Math.floor(ScreenSize() / 110);
  const [currentIndex, setCurrentIndex] = useState(0);

  const last_index = Math.ceil((menu_list.length - imagesPerPage) / 3)

  const scrollForward = () => {
    if (currentIndex + 1 >= images.length) {
      // If reaching the end, loop back to the beginning
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollBackward = () => {
    if (currentIndex - 1 < 0) {
      // If reaching the start, loop back to the end
      setCurrentIndex(images.length - imagesPerPage);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate the translateX value based on the current index
  const translateX = -(currentIndex * (100 / imagesPerPage)); // Adjust for smooth scrolling

  return (
    <div id="menu">
      <div className='pre-next-buttons'>
        {/* <h3>{Math.floor(ScreenSize()/110) }</h3> */}
        {currentIndex == 0 ?

          <button disabled>&#129144;</button>
          :
          <button onClick={scrollBackward}>&#129144;</button>
        }
        {/* {currentIndex==last_index?  <button disabled>Next</button>:  <button onClick={scrollForward}>Next</button>} */}
        <button onClick={scrollForward}>&#129146;</button>
      </div>
      <div className="image-scroll-container">
        <center>
          <div
            className="scroll-wrapper"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {images.map((image, index) => (
              <img key={index} src={image.menu_image} alt={`Image ${index}`} className="scroll-image" />
            ))}
          </div>
        </center>
      </div>
      {console.log(currentIndex, last_index, menu_list.length)}

    </div>
  );
};

export default ImageScroll;