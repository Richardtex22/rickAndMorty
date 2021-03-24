import React from "react";
import charsQuery from "../Helpers/charsQuery";
import { useQuery } from "@apollo/react-hooks";

import "./Characters.module.css";
import Loading from "./Loading";

const Characters = ({ page }) => {
  const { loading, error, data } = useQuery(charsQuery, {
    variables: { page }
  });

  if (error) {
    return <h2 className="text-5xl">Houston we have problems</h2>;
  }
  if (loading) return <Loading />;
  const {
    results
  } = data.characters || [];

  return (
    <section className="grid grid-cols-1 bg-gray-300 gap-2 md:grid-cols-2 ">
      {results.map((char) => {
        return (
          <div className="grid grid-rows-1 sm:grid-cols-2 mt-8 ml-4 mr-4 items-center rounded-lg bg-black gap-4" key={char.id}>
            <div className="flex-1 w-full h-2/3 sm:h-full self-start">
              <img src={char.image} className="align-middle w-full h-full object-center object-cover rounded-tl-lg rounded-tb-lg" alt="avatar" />
            </div>
            <div className="grid grid-cols-auto h-full content-around text-left ml-2 text-lg capitalize text-white pl-4">
              <h2 className="text-3xl">
                {char.name}
              </h2>
              <p>{char.status}</p>
              <p>{char.gender}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Characters;