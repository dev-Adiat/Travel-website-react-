import React from 'react'
import logo from '../images/logo.png'
import './navbar.css'


const navbar = () => {
  return (
     <section id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <a href="#">
                    <img src={logo} alt="Logo"/>
                </a>
                <menu className="nav_opt">
                    <ul>
                        <li><a href="#">HOME</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#">PAGES</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#">TRAVEL</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#">BLOG</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#">SHOP</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a href="#">LEMENTS</a>
                        </li>
                    </ul>
                </menu>
                <div className="nav_action">
                    <div className="nav_action_items">
                        <a href="#"><i className="fa-solid fa-message"></i>
                        </a>
                    </div>
                    <div className="nav_action_items"><i className="fa-solid fa-paper-plane"></i>
                        <a href="#">
                        </a>
                    </div>
                    <div className="nav_action_items"><i className="fa-solid fa-heart"></i>
                        <a href="#">
                        </a>
                    </div>
                    <div className="nav_action_items"><i className="fa-solid fa-plus"></i>
                        <a href="#">
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    
  )
}

export default navbar

