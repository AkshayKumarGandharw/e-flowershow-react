import React from 'react';
import './gallery.css';

function Gallery() {
  return (
    <div className='Gallery'>
       <h2 className='text-center' >Gallery</h2>
        <div className="mygallery">
            <div className="gallery-list">
                <div className="gallery-items" id="flower1"></div>
                <div className="gallery-items" id="flower2"></div>
                <div className="gallery-items" id="flower3"></div>
                <div className="gallery-items" id="flower4"></div>
                <div className="gallery-items" id="flower5"></div>
                <div className="gallery-items" id="flower6"></div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;