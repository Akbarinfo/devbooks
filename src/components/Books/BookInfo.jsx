import React from "react";
import { Link, useLocation } from "react-router-dom";
//scss
import './BookInfo.scss'
import imgb from "../../assets/images/object/otkirhoshimov.jpg"
import dataobj from '../../Books/Books'


export default function BooksInfo() {
  let location = useLocation();

  return(
    <section className="bookinfo">
      <div className="container">
        {dataobj.map((item, k) => {
          return(
            item.bookObj.map((book, keys) => {
              if(book.bookId === location.pathname.split('/').at(-1)){
                return(
                  <div key={keys+66} className="bookinfo__main d-flex justify-content-between">
                  <div className="bookinfo__imgbox">
                    <img className="bookinfo__img" src={book.bookImg} alt="" />
                  </div>
                  <div className="bookinfo__rightbox">
                    <h2 className="bookinfo__title">{book.bookName}</h2>
                    <div className="bookinfo__avtor d-flex">
                    <Link className="bookinfo__link" to={`/Users/${item.id}`}>{item.name} {item.lastName}</Link> | <p className="writers__work-comment bookinfo__pad"><i className='bx bxs-star bookinfo__pad'></i> {book.bookRating} </p>
                    </div>
                    <p className="bookinfo__info">Sahifalar soni: <span className="bookinfo__span">{book.bookPage}</span></p>
                    <p className="bookinfo__info">Chop etilgan: <span className="bookinfo__span">{book.published}</span></p>
                    <p className="bookinfo__info">Janri: <span className="bookinfo__span">{book.bookGenre}</span></p>
                    <p className="bookinfo__info">Nashriyot <span className="bookinfo__span">{book.nashriyot}</span></p>

                    <div className="bookinfo__descbox" id="accordionExample">
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="bookinfo__descbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          To'liq malumot
                          <i className="bx fs-5 text-white ms-2 bx-down-arrow-alt" />
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="bookinfo__desc accordion-body pb-3 ps-0">
                          {book.bookInfoTwo}
                        </div>
                      </div>
                    </div>
                    </div>
                    <h3 className='bookinfo__format'>Mavjud formatlar</h3>
                    <ul className='d-flex bookinfo__list justify-content-between align-items-center'>
                      <li className='text-center bookinfo__item'>
                        <i className='bx bxs-book-alt bookinfo__icon'></i>
                        <p className='mb-2'>Qog'oz kitob</p>
                        <span>{book.bookPrice}</span>
                      </li>

                      <li className='text-center bookinfo__item'>
                        <i className='bx bx-headphone bookinfo__icon'></i>
                        <p className='mb-2'>Audiokitob</p>
                        <span>{book.audioTime}</span>
                      </li>

                      <li className='text-center bookinfo__item'>
                        <i className='bx bx-mobile-alt bookinfo__icon'></i>
                        <p className='mb-2'>Elektron</p>
                        <span>{book.electron}</span>
                      </li>

                      <li>
                        <button className="bookinfo__btn">Javonga qo’shish</button>
                      </li>
                    </ul>
                  </div>
                </div>
                )
              }
            })
          )
        })}
      </div>
    </section>

  )
}
