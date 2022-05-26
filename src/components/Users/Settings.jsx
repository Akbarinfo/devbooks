import React from "react";
import { Link } from "react-router-dom";
//scss
import './Settings.scss'
//images
import imgss from '../../assets/images/object/otkirhoshimov.jpg'

export default function Settings(props) {

  let inName = (e) => {
    props.setName(e.target.value)
  }

  let inLastName = (e) => {
    props.setLastName(e.target.value)

  }

  let inPhone = (e) => {
    props.setPhone(e.target.value)

  }

  let inMail = (e) => {
    props.setMail(e.target.value)

  }

  return(
    <section className="settings">
      <div className="container">
        <div className="d-flex">
          <div className="settings__leftbox">
            <div className="settings__imgbox">
              <img className="settings__img" src={imgss} alt="" />
            </div>
            <span className="settings__ph d-flex align-items-center justify-content-center"><i className='bx bx-camera'></i></span>
          </div>
          <div className="settings__rightbox ">

            <h2 className="settings__title">My profile</h2>

            <form className="d-flex flex-column col-12" action="">
              <label className="settings__label" htmlFor="">
                <span className="settings__name">First Name</span>
                <input onChange={inName} className="settings__input" id="setname" type="text"  defaultValue={props.name} />
                <span className="settings__desc">Please enter your first name.</span>
              </label>
              <label className="settings__label" htmlFor="setlname">
                <span className="settings__name">Last Name</span>
                <input onChange={inLastName} className="settings__input" id="setlname" type="text" defaultValue={props.lastName}/>
                <span className="settings__desc">Please enter your last name.</span>
              </label>
              <div className="settings__box d-flex align-items-center justify-content-between">
              <label className="settings__label col-5" htmlFor="setnumber">
                <span className="settings__name">Phone</span>
                <input onChange={inPhone} className="settings__input settings__in" id="setnumber" type="text" defaultValue={props.phone}/>
                <span className="settings__desc">Please enter your  phone number.</span>
              </label>
              <label className="settings__label col-6" htmlFor="setmail">
                <span className="settings__name">Email</span>
                <input onChange={inMail} className="settings__input settings__in" id="setmail" type="text" defaultValue={props.mail}/>
                <span className="settings__desc">Please enter your email address.</span>
              </label>
              </div>

              <hr className="settings__hr" />

              <div className="d-flex justify-content-end">
                <Link to="/profile">
                  <button className="settings__btn">Save Changes</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
