import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
        <footer>
        <div class="container">
            <div class="footer_wrapper">
                <div class="footer_item">
                    <h3 class="footer_title">QUICK LINKS</h3>
                    <ul class="footer_list">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer_item">
                    <h3 class="footer_title">LEGAL STUFF</h3>
                    <ul class="footer_list">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security Policy</a></li>
                        <li><a href="#">Money Back Guarantee</a></li>
                    </ul>
                </div>
                <div class="footer_item">
                    <h3 class="footer_title">OUR TEAM</h3>
                    <ul class="footer_list">
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                    </ul>
                </div>
                <div class="footer_item">
                    <h3 class="footer_title">FEATURED SERVICES</h3>
                    <ul class="footer_list">
                        <li><a href="#">Local SEO</a></li>
                        <li><a href="#">Social Media Marketing</a></li>
                        <li><a href="#">Marketing Management</a></li>
                        <li><a href="#">Search Engine Optimization</a></li>
                        <li><a href="#">Free SEO Analysis</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright 2023-2026 example.com </p>
            <div></div>
            <p>Terms of service Privacy policy ookie policy.</p>
        </div>
    </footer>
  )
}
