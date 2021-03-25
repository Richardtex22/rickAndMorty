import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import Loading from "./Loading";
import charById from "../Helpers/charById";

const Chars = ({ match }) => {
const id = match.params.id;

const { loading, error, data } = useQuery(charById, {
    variables: { id }
  });

  if (error) {
    return <h2 className="text-5xl">Houston we have problems</h2>;
  }
  if (loading) return <Loading />;
  const {
    id: charId, name, type, species, image, location 
  } = data.character || {};
    console.log(data);

  return (
      <div className="flex flex-row text-left m-4 text-lg">
          <p>{charId}</p>
          <p>{name}</p>
      </div>
  )

};

export default Chars;