import React from 'react'
import star from '../images/star.png'
import video from '../images/video.jpg'
import './destination.css'
import { FaPlay } from "react-icons/fa";

const Destination = () => {
  return (
    <section id="destination">
        <div className="container">
            <div className="destination_wrapper">
                <div className="destination_content">
                    <h3>FEATURED DESTINATION</h3>
                    <h2>CHOOSE </h2>
                    <h2>THE PERFECT ACCOMMODATION.</h2>
                    <div className="destination_ptag">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p>elit, sed diam nonummy nibh euismod tincidunt ut </p>
                        <p>laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="destination_video">
                    <img src={video} alt=""/>
                    <div className="img_icon">
                        <FaPlay />
                    </div>


                </div>
            </div>
            <div className="book_now">
                <div className="book_now_left">
                    <h3>TRAVEL LOCATION</h3>

                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star" className="inactive"/>
                    </div>
                </div>
                <div className="book_now_right">
                    <p>Tour Price</p>
                    <span>$125,99</span>
                </div>
                <div className="common_btn">
                    <a href="#">BOOK NOW</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Destination