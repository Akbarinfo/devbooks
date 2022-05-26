import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//scss
import './Header.scss'
//images
import havatar from '../../assets/images/header-avatar.png'
import Users from "../Users";

export default function Header({setWishlist, wishlist}) {

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

  let deleteHandler = (e) => {
    let idd = e.target.id

    setWishlist(wishlist.filter(item => item.bookId !== idd))
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
                  <Link onClick={() => SetModalClick(!modalClick)} className="header__modal-link" to="/profile">Profile</Link>
                </p>
              </li>
              <li className='header__modal-item'>
                <p className='d-flex align-items-center'><i className='header__modal-icon me-2 bx bxs-cog'></i><Link onClick={() => SetModalClick(!modalClick)} className="header__modal-link" to="/settings">Settings</Link></p>
              </li>
              <li className='header__modal-item'>
                <p className='d-flex align-items-center'><i className='header__modal-icon me-2 bx bxs-book mark-star'></i>
                <button onClick={() => SetModalClick(!modalClick)} className="header__modal-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Wishlist</button>

                </p>
              </li>
            </ul>
          </div>
        </div>
        {

        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Kitoblar Javoni</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <ul className="header__canvas-list flex-column d-flex justify-content-center">
            {
              wishlist.map((book, key) => {
                return(
                  <Link key={key+33} className="header__canvas-link" to={`/Books/${book.bookId}`}>
                  <li className="header__canvas-item d-flex align-items-center">
                    <div className="header__canvas-imgbox">
                      <img className="header__canvas-img" src={book.bookImg} alt="" />
                    </div>
                    <div className="ps-3">
                    <h3 className="header__canvas-name">{book.bookName}</h3>
                    <p className="header__canvas-comment"><i className='bx bxs-star writers__stars'></i> {book.bookRating} • 3400 ta fikrlar</p>
                    </div>
                    <button onClick={deleteHandler} id={book.bookId} className="header__canvas-btn">-</button>
                  </li>
                 </Link>
                )
              })
            }
          </ul>
        </div>}
      </div>
    </header>
  )
}
