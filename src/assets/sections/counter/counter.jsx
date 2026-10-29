import React from 'react'
import './counter.css'
const Counter = () => {
  return (
     <section id="counter">
        <div class="container">
            <div class="counter_wrapper">
                <div class="counter_item">
                    <h3>800K</h3>
                    <span>SUBSCRIBERS</span>
                </div>
                <div class="counter_item">
                    <h3>2.3M</h3>
                    <span>FOLLOWERS</span>
                </div>
                <div class="counter_item">
                    <h3>1.7B</h3>
                    <span>LIKES</span>
                </div>
                <div class="counter_item">
                    <h3>4.5*</h3>
                    <span>RATING</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter