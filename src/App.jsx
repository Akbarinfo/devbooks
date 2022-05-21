import {Route, Routes } from 'react-router-dom';
import './App.css';
import Adiblar from './components/Adiblar';
import Forum from './components/Forum';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Kitoblar from './components/Kitoblar';
import Maqolalar from './components/Maqolalar';
import Users from './components/Writers';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/adiblar" element={<Adiblar />} />
        <Route path="/kitoblar" element={<Kitoblar />} />
        <Route path="/maqolalar" element={<Maqolalar />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="Users/:id" element= {<Users/>}/>
      </Routes>
    </>
  );
}

export default App;
