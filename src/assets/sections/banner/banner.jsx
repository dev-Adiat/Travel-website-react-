import React from 'react'
import icon1 from '../images/Group 43.png'
import './banner.css'

const Banner = () => {
  return (
    <section id="banner">
        <div class="contaimer">
            <div class="banner_wrapper">
                <h1>CHOOSE </h1>
                <h1>THE PERFECT DESTINATIONS.</h1>
                <div class="lorem_wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy </p>
                    <p>nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi </p>
                    <p> enim ad minim veniam, quis nostrud exerci tation.</p>
                </div>
                <form>
                    <div class="banner_search">
                        <input type="text" placeholder="Enter Your Location"/>
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                    <div class="map_circle">
                        <img src={icon1} alt="img"/>
                    </div>
                </form>


            </div>
        </div>
    </section>
  )
}

export default Banner
