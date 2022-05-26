import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import Category from "./category/Category";
//scss
import './Main.scss'
import Search from "./search/Search";
import obj from '../../Books/Books.js'
import Pagenation from "./Pagenation";

export default function Main() {
  const [newObj, setNewObj] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    setNewObj(obj)
  },[])

  let indexOfLastPage = currentPage * postsPerPage;
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = newObj.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return(
    <>
    <main id="#main">
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search
            obj={obj}
            newObj={newObj}
            setNewObj={setNewObj}
          />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category
            obj={obj}
            newObj={newObj}
            setNewObj={setNewObj}
          />
          <Card
           obj={obj}
           newObj={currentPosts}
           setNewObj={setNewObj}
          />
          <Pagenation
            postsPerPage={postsPerPage}
            totalPosts={newObj.length}
            paginate={paginate}
          />
        </section>
      </div>
    </main>
    </>
  )
}