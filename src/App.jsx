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
import Writers from './components/Writers';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/adiblar" element={<Adiblar />} />
        <Route path="/maqolalar" element={<Maqolalar />} />
        {/* <Route path="/forum" element={<Forum />} /> */}
        <Route path="Users/:id" element= {<Writers />}/>
        <Route path="/signin" element= {<SignIn />}/>
        <Route path="/forum" element= {<SignUp />}/>
        <Route path="/kitoblar" element= {<Books />}/>
        <Route path="Books/:id" element={<BooksInfo />} />
        <Route path="/profile" element={<Users />} />

      </Routes>
    </>
  );
}

export default App;
