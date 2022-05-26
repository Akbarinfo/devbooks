import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Adiblar from './components/Adiblar';
import Books from './components/Books';
import BooksInfo from './components/Books/BookInfo';
import Forum from './components/Forum';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Maqolalar from './components/Maqolalar';
import SignIn from './components/Sign/Signin';
import SignUp from './components/Sign/Signup';
import Users from './components/Users';
import Settings from './components/Users/Settings';
import Writers from './components/Writers';

function App() {
  let [name, setName] = useState()
  let [lastName, setLastName] = useState()
  let [phone, setPhone] = useState()
  let [mail, setMail] = useState()
  let [pass, setPass] = useState()

  //saved
  let [wishlist, setWishlist] = useState([])
  return(
    <>
      <Header
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/adiblar" element={<Adiblar />} />
        <Route path="/maqolalar" element={<Maqolalar />} />
        {/* <Route path="/forum" element={<Forum />} /> */}
        <Route path="Users/:id" element= {<Writers />}/>
        <Route path="/signin" element= {<SignIn />}/>
        <Route path="/forum" element= {<SignUp
          setName={setName}
          setLastName={setLastName}
          setPhone={setPhone}
          setMail={setMail}
          setPass={setPass}
         />}/>
        <Route path="/kitoblar" element= {<Books />}/>
        <Route path="Books/:id" element={<BooksInfo
          wishlist={wishlist}
          setWishlist={setWishlist} />}
        />
        <Route path="/profile" element={<Users
          name={name}
          lastName={lastName}
          phone={phone}
          mail={mail}
          pass={pass}
          wishlist={wishlist}
        />} />
        <Route path="/settings" element={<Settings
          name={name}
          lastName={lastName}
          phone={phone}
          mail={mail}
          setName={setName}
          setLastName={setLastName}
          setPhone={setPhone}
          setMail={setMail}
        />} />
      </Routes>
    </>
  );
}

export default App;
