import React from 'react'
import destination2_img from '../images/destination_2.jpg'
import path143 from '../images/Path 143.png'
import './destination2.css'
const Destination2 = () => {
  return (
    <section id="Destination_2">
        <div class="container">
            <div class="destination2_wrapper">
                <div class="destination2_img">
                    <img src={destination2_img} alt="Destination 2"/>
                </div>
                <div class="destination2_content">
                    <h3>FEATURED DESTINATION</h3>
                    <h2>CHOOSE </h2>
                    <h2>THE PERFECT ACCOMMODATION.</h2>
                    <div class="destination_ptag">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p>elit, sed diam nonummy nibh euismod tincidunt ut </p>
                        <p>laoreet dolore magna aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
            <div class="destination_2_shape">
                <img src={path143} alt="Shape"/>
            </div>
        </div>

    </section>
  )
}

export default Destination2