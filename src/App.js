import React, { useState } from "react";
import Characters from "./Components/Characters.jsx";
import "./index.css";
import "./App.css";

export default function App() {
  const [pageCount, setPageCount] = useState(1);
  return (
    <main className="text-center -m-2">
    <section className="Hero-image bg-center bg-no-repeat bg-cover relative">
        <div className="w-46 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-5xl mb-8">Rick | Morty</h1>
          <div className="flex flex-col items-center justify-center w-full md:flex-row md:items-baseline">
          {pageCount > 1 ? 
           (
               <button className="font-mono mb-4 text-base h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" 
                onClick={() => setPageCount(pageCount - 1)}
                >
                 Previous Page
                 </button>
               )
               : null
          }
          <p className="text-base mx-8 pb-4">Render a list of Rick & Morty characters</p>
          <button className="font-mono text-base mb-4 h-12 py-0 px-6 text-center mx-4 text-black bg-white rounded-lg border border-white border-solid md:mb-0" onClick={() => setPageCount(pageCount + 1)}>Next Page</button>
          </div>
        </div>
      </section>
    <Characters page={pageCount}/>
    </main>
  )
  
}