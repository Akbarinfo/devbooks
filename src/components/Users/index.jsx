import React from "react";
import { Link } from "react-router-dom";
//scss
import "./Users.scss";

export default function Users({name, lastName, phone, mail, wishlist}) {
  return(
    <section className="profile">
    <div className="container">
      <div className="profile__header d-flex">
        <div className="">
          <div className="profile__leftbox">
          <div className="profile__avabox">
            <img className="profile__avatar" src="https://imgur.com/SilJTRT.jpg" alt="" />
          </div>
            <span className="profile__star justify-content-center align-items-center"><i className='bx bxs-star'></i></span>
          </div>
          <p className="profile__level">Oltin Kitobxon</p>
          <p className="profile__read">186 ta kitob o'qigan</p>
        </div>
        <div className="rightbox">
          <h2 className="profile__name">{name} {lastName}</h2>
          <p className="profile__info">Mail: <span className="profile__infospan">{mail}</span></p>
          <p className="profile__info">Tel: <span className="profile__infospan">{phone}</span></p>
          <p className="profile__info">Bio: <span className="profile__infospan">Frontend Developer</span></p>
        </div>
      </div>

      <div className="d-flex">
        <div className="profile__ad d-flex justify-content-center align-items-center">
          <p className="profile__adtext">Bu yerda Sizning reklamangiz bo'lishi mumkin!!!</p>
        </div>
        <div className="profile__rbox">
          <div className="profile__box d-flex justify-content-between align-items-center">
            <p className="profile__title profile__activ">Saqlanganlar</p>
            <p className="profile__title">O'qilganlar</p>
            <p className="profile__title">O'qilmoqda</p>
            <p className="profile__title">Adiblar</p>
          </div>

          <ul className="writers__work-list d-flex flex-wrap">
            {
              wishlist.map((book, k) => {
                return(
                  <Link key={k+56} className="writers__work-link" to="">
                    <li className="writers__work-item">
                      <div className="writers__work-imgbox">
                        <img className="writers__work-img" src={book.bookImg} alt="" />
                      </div>
                      <h3 className="writers__work-name">{book.bookName}</h3>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> {book.bookRating} • 3400 ta fikrlar</p>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
