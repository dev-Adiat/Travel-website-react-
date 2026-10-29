import React from 'react'
import path144 from '../images/Path 144.png'
import tick from '../images/tick.png'
import orang_Tick from '../images/orang_tick.png'
import './package.css'


const Package = () => {
  return (
    <section id="Package">
        <div class="package_shape">
            <img src={path144} alt="Shape"/>
        </div>
        <div class="container">
            <div class="package_title">
                <h2 class="sec_title">Special Package</h2>

            </div>
            <div class="sec_paragraph">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                <p>euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div class="package_card_wrapper">
                <div class="package_card">
                    <div class="package_card_content">
                        <h2>Starter</h2>
                        <span class="price">$9</span>
                        <h4>Per Month</h4>
                        <div class="tick_points_wrapper">
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>International Air Ticket.</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>Daily Continental Breakfast.</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>Lunch And Dinner</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>City Tour with Guide</p>
                            </div>
                            <div class="tick_points" id="inactive">
                                <img src={tick} alt="logo"/>
                                <p>09 Nights Hotel</p>
                            </div>
                            <div class="tick_points" id="inactive">
                                <img src={tick} alt="logo"/>
                                <p>Desert Safari & BBQ Dinner</p>
                            </div>

                        </div>

                    </div>
                    <div class="btn">
                        <a href="#" class="package_btn">Get started</a>
                    </div>
                    <p class="trial">4 Days Trial Available</p>
                </div>
                <div class="package_card">
                    <div class="package_card_content">
                        <h2>Standard</h2>
                        <span class="price">$199</span>
                        <h4>Per Month</h4>
                        <div class="tick_points_wrapper">
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>International Air Ticket.</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>Daily Continental Breakfast.</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>Lunch And Dinner</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>City Tour with Guide</p>
                            </div>
                            <div class="tick_points">
                                <img src={tick} alt="logo"/>
                                <p>09 Nights Hotel</p>
                            </div>
                            <div class="tick_points" id="inactive">
                                <img src={tick} alt="logo"/>
                                <p>Desert Safari & BBQ Dinner</p>
                            </div>

                        </div>

                    </div>
                    <div class="btn">
                        <a href="#" class="package_btn">Get started</a>
                    </div>
                    <p class="trial">4 Days Trial Available</p>
                </div>
                <div class="package_card_premium">
                    <div class="package_card_content">
                        <h2>Premium</h2>
                        <span class="price">$499</span>
                        <h4>Per Month</h4>
                        <div class="tick_points_wrapper">
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>International Air Ticket.</p>
                            </div>
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>Daily Continental Breakfast.</p>
                            </div>
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>Lunch And Dinner</p>
                            </div>
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>City Tour with Guide</p>
                            </div>
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>09 Nights Hotel</p>
                            </div>
                            <div class="tick_points">
                                <img src={orang_Tick} alt="logo"/>
                                <p>Desert Safari & BBQ Dinner</p>
                            </div>

                        </div>
 
                    </div>
                    <div class="btn_premium">
                        <a href="#" class="package_btn_premium">Get started</a>
                    </div>
                    <p class="trial">4 Days Trial Available</p>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Package