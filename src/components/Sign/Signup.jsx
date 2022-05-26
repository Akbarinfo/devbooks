import React, { useState } from "react";
import { Link } from "react-router-dom";
//scss
import './Sign.scss'
// images
import signup from '../../assets/images/signup.svg'
import databaza from "../Users/databaza";

console.log(databaza)

export default function SignUp() {
  let [user, setUser] = useState([])

  let formHandler = (e) => {
    e.preventDefault()
    let names = e.target[0].value
    let lnames = e.target[1].value
    let phonee = e.target[2].value
    let maile = e.target[3].value
    let passe = e.target[4].value

    setUser({
      name: names,
      lname: lnames,
      phone: phonee,
      mail: maile,
      pass: passe
    })
    databaza.push({
      name: names,
      lname: lnames,
      phone: phonee,
      mail: maile,
      pass: passe
    })
  }

  let [inname, setInName] = useState(true)
  let [inlastname, setInLastName] = useState(true)
  let [inphone, setInPhone] = useState(true)
  let [inmail, setInMail] = useState(true)
  let [inpassword, setInPassword] = useState(true)
  let [count, setCount] = useState(0)

  //focus
  let nHandler = (e) => {
    let name = e.target.value;

     if(name === "" || name.match(/[0-9]/) || name.match(/[!@#&%*$^]/) || name.includes("  ") || name.length < 2){
       setInName(false);

     }else{
       setInName(true);
       setCount(count + 1)
     }
   }

   let lnHandler = (e) => {
    let lastName = e.target.value;

     if(lastName === "" || lastName.match(/[0-9]/) || lastName.match(/[!@#&%*$^]/) || lastName.includes("  ") || lastName.length < 2){
       setInLastName(false);
     }else{
       setInLastName(true);
       setCount(count + 1)

     }
   }

   let phHandler = (e) => {
     let phone = e.target.value;

     if(phone.length === "" || phone.length < 9 || Number.isInteger(phone)){
       setInPhone(false);
     }else{
       setInPhone(true);
       setCount(count + 1)

     }
   }

   let mHandler = (e) => {
    let email = e.target.value;

     if(! email.includes('@') && ! email.includes('.')){
       setInMail(false)
     }
     else{
       setInMail(true)
       setCount(count + 1)
     }
   }

   let paHandler = (e) => {
     let key = e.target.value
     if(key.match(/[A-Z]/) === null || key.match(/[0-9]/) === null) {
       setInPassword(false)
     }
     else {
       setInPassword(true)
       setCount(count + 1)
     }
   }

  ///input
  let nameHandler = (e) => {
   let name = e.target.value;

    if(name === "" || name.match(/[0-9]/) || name.match(/[!@#&%*$^]/) || name.includes("  ") || name.length < 2){
      setInName(false);

    }else{
      setInName(true);
    }
  }

  let lastnameHandler = (e) => {
   let lastName = e.target.value;

    if(lastName === "" || lastName.match(/[0-9]/) || lastName.match(/[!@#&%*$^]/) || lastName.includes("  ") || lastName.length < 2){
      setInLastName(false);
    }else{
      setInLastName(true);
    }
  }

  let phoneHandler = (e) => {
    let phone = e.target.value;

    if(phone.length === "" || phone.length < 9 || Number.isInteger(phone)){
      setInPhone(false);
    }else{
      setInPhone(true);
    }
  }

  let mailHandler = (e) => {
   let email = e.target.value;

    if(! email.includes('@') && ! email.includes('.')){
      setInMail(false)
    }
    else{
      setInMail(true)
    }
  }

  let passHandler = (e) => {
    let key = e.target.value
    if(key.match(/[A-Z]/) === null || key.match(/[0-9]/) === null) {
      setInPassword(false)
    }
    else {
      setInPassword(true)
    }
  }


  return(
    <section className="sign">
      <div className="container">
        <div className="sign__main d-flex">
          <div className="sign__imgbox">
            <img className="sign__img" src={signup} alt="" />
          </div>
          <div className="sign__rightbox">
            <div className="sign__box">
              <h2 className="sign__title">Sign Up</h2>
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/signin">Sign in</Link> </p>
              <form action="/profile" onSubmit={formHandler}>
                <label className="sign__label" htmlFor="fristname">
                  <input id="fristname" onBlur={nHandler} onChange={nameHandler} className={inname ? "sign__input" : "sign__input sign__error"} type="text" placeholder="First Name"/>
                </label>
                <label className="sign__label" htmlFor="lastname">
                  <input id="lastname" onBlur={lnHandler} onChange={lastnameHandler} className={inlastname ? "sign__input" : "sign__input sign__error"} type="text" placeholder="Last name"/>
                </label>
                <label className="sign__label" htmlFor="upphone">
                  <input id="upphone" onBlur={phHandler} onChange={phoneHandler} className={inphone ? "sign__input" : "sign__input sign__error"} type={"number"} placeholder="Phone" />
                </label>
                <label className="sign__label" htmlFor="upmail">
                  <input id="upmail" onBlur={mHandler} onChange={mailHandler} className={inmail ? "sign__input" : "sign__input sign__error"} type="text" placeholder="Email" />
                </label>
                <label className="sign__label" htmlFor="uppass">
                  <input id="uppass" onBlur={paHandler} onChange={passHandler} className={inpassword ? "sign__input" : "sign__input sign__error"} type="text" placeholder="Password"/>
                </label>

                <button type="submit" className="sign__btn" disabled={count >= 5 ? false : true}>Next step</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}