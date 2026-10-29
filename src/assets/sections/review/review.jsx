import React from 'react'
import './review.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import rvw_img_1 from '../images/rvw img 1.png'
import rvw_img_2 from '../images/rvw img 2.png'
import rvw_img_3 from '../images/rvw img 3.png'
import rvw_img_4 from '../images/rvw img 4.png'
import rvw_img_5 from '../images/rvw img 5.png'
import rvw_img_6 from '../images/rvw img 6.png'


const Review = () => {
  return (
    <section id="review">
        <div className="container">
            <h2 className="sec_title">
                CUSTOMER WORDS
            </h2>
            <p className="sec_subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh<br/>
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <div className="review_wrapper">
                <div className="review_item">
                    <div className="review_img">
                        <img src={rvw_img_1} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Victoria Wotton</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        <img src={rvw_img_2} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Sonia Marmeladova</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
              <div className="review_item_error"  style={{ backgroundColor: '#036E8A' }}>
                    <div className="review_img">
                        <img src={rvw_img_3} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Hindley Earnshaw</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div className="review_item" style={{ backgroundColor: '#FF8000' }}>
                    <div className="review_img">
                        <img src={rvw_img_4} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Catherine Earnshaw</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating_green">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />

                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        <img src={rvw_img_5} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Isabella Linton</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />  
                            <FaStar />  
                            <FaStar />  
                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        <img src={rvw_img_6} alt="review image"/>
                    </div>
                    <div className="review_info">
                        <h4>Jennifer Williams</h4>
                        <h5>Traveller, Guide</h5>
                        <div className="review_rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="sec_subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod
                            tincidunt ut laoreet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
)
}

export default Review