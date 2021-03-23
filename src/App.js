import React, { useState, useEffect } from "react";
import Characters from "./Components/Characters.jsx";
import "./App.css";

/*const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;*/


export default function App() {
  const [pageCount, setPageCount] = useState(1);

  return (
    <main className="App">
    <section className="Hero-image">
        <div className="Header">
          <h1>Rick | Morty</h1>
          <div className="Header-cont">
          {pageCount > 1 ? 
           (
               <button className="btn" onClick={() => setPageCount(pageCount - 1)}>Previous Page</button>
               )
               : null
          }
          <p className="description">Render a list of Rick&Morty characters</p>
          <button className="btn" onClick={() => setPageCount(pageCount + 1)}>Next Page</button>
          </div>
        </div>
      </section>
    <Characters page={pageCount}/>
    </main>
  )
  
}