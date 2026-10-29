import React from 'react'
import './newsletter.css'
import newslettersmall from '../images/newsletter small.png'
import newsletterbig from '../images/newsletter big.png'
import newsletteranotherimg from '../images/newsletter another img.png'
import { FaEnvelope } from "react-icons/fa";
const Newsletter = () => {
  return (
      <section id="newsletter">
        <div class="container">
            <div class="newsletter_gal">
                <div class="newsletter_gal_item" >
                    <img src={newslettersmall} alt="newsletter"/>
                </div>
                <div class="newsletter_gal_item"style={{ transform: 'translateX(-15px)' }}>
                    <img src={newsletterbig} alt="newsletter"/>
                </div>
            </div>
            <div class="newsletter_box">
                <div class="newsletter_box_img">
                    <img src={newsletteranotherimg} alt="newsletter"/>
                </div>
                <div class="newsletter_box_form">
                    <h3 class="sec_subtitle">
                        SUBSCRIBE FOR OFFERS
                    </h3>
                    <h2 class="sec_title">
                        TO GET ALL NEWS,
                        SUBSCRIBE OUR
                        NEWSLETTER
                    </h2>
                    <form class="newsletter_form">
                        <div class="form_group">
                            <input type="email" placeholder="Enter your email"/>
                            <FaEnvelope />

                        </div>
                        <button>Let's Go</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter