import React from 'react'
import './gallery.css'
import img1 from '../images/gallery_img1.jpg'
import img2 from '../images/gallery_img2.jpg'
import img3 from '../images/gallery_img3.jpg'
import img4 from '../images/gallery_img4.jpg'
import img5 from '../images/gallery_img5.jpg'
import img6 from '../images/gallery_img6.jpg'
import img7 from '../images/gallery_img7.jpg'
import img8 from '../images/gallery_img8.jpg'
const Gallery = () => {
  return (
    <section id="gallery">
        <div className="container">
            <div className="gallery_title">
                 <h2 className="sec_title">Most Destinations</h2>
            </div>
             <div className="sec_paragraph">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                <p>euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="gallery_wrapper">
              <div className="gallery_img_top">
                <img src={img1} id="large" alt=""/>
                <img src={img2} id="small" alt=""/>
                <img src={img3} id="large" alt=""/>
                <img src={img4} id="small" alt=""/>
              </div>
              <div className="gallery_img_down">
                <img src={img5} id="small" alt=""/>
                <img src={img6} id="large" alt=""/>
                <img src={img7} id="small" alt=""/>
                <img src={img8} id="large" alt=""/>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery