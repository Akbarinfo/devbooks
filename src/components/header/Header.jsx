import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//scss
import './Header.scss'
//images
import havatar from '../../assets/images/header-avatar.png'
import Users from "../Users";

export default function Header() {

  let [modalClick, SetModalClick] = useState(false)

  let navg = [
    {
      link: "/",
      title: "Bosh sahifa",
      class: true
    },

    {
      link: "adiblar",
      title: "Adiblar",
      class: false
    },

    {
      link: "kitoblar",
      title: "Kitoblar",
      class: false
    },

    {
      link: "maqolalar",
      title: "Maqolalar",
      class: false
    },

    {
      link: "forum",
      title: "Forum",
      class: false
    },
  ]

  let navBtn = (e) => {
    e.preventDefault()
    navg.map((item) => {
      if(e.target.innerText === item.title) {
        item.class = true
        console.log("ishladi")
      } else {
        item.class = false
        console.log("ishlamadi")
      }
    })
  }

  return(
    <header className="header">
      <div className="container">
        <div className="header__main d-flex justify-content-between align-items-center">
          <div className="header__logobox">
            <a className="header__logo" href="/">Badiiyat</a>
          </div>

          <nav className="header__nav">
            <ul className="header__list d-flex justify-content-between align-items-center">
              {
                navg.map((item, key) => {
                  return(
                    <li key={key+82} className="header__item">
                      <NavLink className={({ isActive }) =>
                        isActive ? "header__link header__activ" : "header__link"
                      } to={item.link}>{item.title}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

          <div className="header__usersbox d-flex justify-content-between align-items-center">
            <button className="header__btn"><img className="header__avaimg" src={havatar} alt="avatar" /></button>
            <button onClick={() => SetModalClick(!modalClick)} className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>

          <div className={modalClick ? "header__modal block" : "none"}>
            <ul className='header__modal-list p-3 m-0'>
              <li className='header__modal-item'>
                <p className='d-flex align-items-center'><i className='header__modal-icon me-2 bx bxs-user'></i>
                  <Link className="header__modal-link" to="/profile">Profile</Link>
                </p>
              </li>
              <li className='header__modal-item'>
                <p className='d-flex align-items-center'><i className='header__modal-icon me-2 bx bxs-cog'></i><Link className="header__modal-link" to="/profile">Settings</Link></p>
              </li>
              <li className='header__modal-item'>
                <p className='d-flex align-items-center'><i className='header__modal-icon me-2 bx bxs-book mark-star'></i>
                <Link className="header__modal-link" to="/profile">Wishlist</Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}