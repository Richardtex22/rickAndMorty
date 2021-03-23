import React from "react";
import charsQuery from "../Helpers/charsQuery";
import { useQuery } from "@apollo/react-hooks";
import Loading from "./Loading";

const Characters = ({ page }) => {
    const { loading, error, data } = useQuery(charsQuery, {
        variables: { page }
    });
    
    if (error) {
        return <h2>Houston we have problems</h2>;
    }
    if (loading) return <Loading />;
    const {
        results,
        info: { pages: totalPages }
    } = data.characters || [];
    
    return (
      <section className="Container">
        {results.map((char) => {
            return (
                <div className="Grid">
              <div className="Avatar-container">
                <img src={char.image} className="Avatar" alt="avatar" />
              </div>
              <div className="Grid--content">
                <h2 key={char.id} className="Card--name">
                  {char.name}
                </h2>
                <p className="Card--name">{char.status}</p>
                <p className="Card--name">{char.gender}</p>
              </div>
            </div>
          );
        })}
      </section>
  );
}
  
  export default Characters;