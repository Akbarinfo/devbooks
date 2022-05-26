import React from "react";
import databaza from "./databaza";
//scss
import "./Users.scss";

export default function Users() {
  return(
    <section className="profile">
    <div className="container">
      <div className="profile__header d-flex">
        <div className="">
          <div className="profile__leftbox">
          <div className="profile__avabox">
            <img className="profile__avatar" src="https://imgur.com/gUyLSOZ.jpg" alt="" />
          </div>
            <span className="profile__star justify-content-center align-items-center"><i className='bx bxs-star'></i></span>
          </div>
          <p className="profile__level">Oltin Kitobxon</p>
          <p className="profile__read">186 ta kitob o'qigan</p>
        </div>
        <div className="rightbox">
          {
            databaza.map(item => {
              return(
                <h2 className="profile__name">{item.name} {item.lname}</h2>

              )
            })
          }
          <p className="profile__info">Tavallud: <span className="profile__infospan">February 08, 1999</span></p>
          <p className="profile__info">Manzili: <span className="profile__infospan">Jizzax</span></p>
          <p className="profile__info">Bio: <span className="profile__infospan">Graphic designer and Developer</span></p>
        </div>
      </div>

      <div className="d-flex">
        <div className="profile__ad d-flex justify-content-center align-items-center">
          <p className="profile__adtext">Bu yerda Sizning reklamangiz bo'lishi mumkin!!!</p>
        </div>
        <div className="">
          <div className="profile__box d-flex justify-content-between align-items-center">
            <p className="profile__title profile__activ">Saqlanganlar</p>
            <p className="profile__title">O'qilganlar</p>
            <p className="profile__title">O'qilmoqda</p>
            <p className="profile__title">Adiblar</p>
          </div>

          <ul className="writers__work-list d-flex flex-wrap">
              <li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li>
              <li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li><li className="writers__work-item">
                <div className="writers__work-imgbox">
                  <img className="writers__work-img" src="https://picsum.photos/id/24/200/" alt="" />
                </div>
                <h3 className="cardBook__title">QOrqmna</h3>
                      <p className="cardBook__name">Toshmatboy</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

{/* <Link className="writers__work-link" to="">
<li className="writers__work-item">
  <div className="writers__work-imgbox">
    <img className="writers__work-img" src="" alt="" />
  </div>
  <h3 className="writers__work-name">Kitoblar</h3>
  <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 5.5 • 3400 ta fikrlar</p>
</li>
</Link> */}