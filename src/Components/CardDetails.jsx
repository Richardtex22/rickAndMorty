import React from 'react';

const CardDetails = ({data}) => {
    const { name, status, species, image, location: {name: locName} } = data;
    const getStatus = (status) => {
        let color = "text-green-400";
        if(status === "Dead") {
          color = "text-red-700";
        }
        if(status === "unknown"){
          color = "text-gray-400";
        }
        return color;
      };
    return (
    <div className="m-8 flex-col sm:w-full sm:h-92 flex sm:flex-row content-around border-gray-100 border-sopd">
        <div className="self-center mb-8 w-5/6 h-auto rounded-lg sm:m-4 sm:w-72 transition duration-500 ease-in-out opacity-90 hover:opacity-100 transform hover:-translate-y-1 hover:scale-105">
            <img className="w-full h-auto rounded-lg" src={image} alt="Character"/>
        </div>
        <div className="px-8 gap-6 w-full sm:w-1/2 sm:p-4 text-left text-lg text-white grid grid-cols-1 content-between">
            <p>{`Apas: ${name}`}</p>
            <p>Status: <span className={getStatus(status)}>{status}</span></p>
            <p>{`Last location known: ${locName}`}</p>
            <p>{`Specie: ${species}`}</p>
        </div>
    </div>
    );
};

export default CardDetails;