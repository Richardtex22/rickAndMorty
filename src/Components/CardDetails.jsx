import React from 'react';

const CardDetails = ({data}) => {
    const {id: charId, name, type, status, species, image, location: {name: locName} } = data;
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
    <div className="m-8 flex-col sm:w-full sm:h-92 flex sm:flex-row content-around border-gray-100 border-solid">
        <div className="mb-8 w-full sm:w-72 h-auto rounded-lg sm:mr-4 transition duration-500 ease-in-out opacity-90 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110">
            <img className="w-auto h-auto rounded-lg" src={image} alt="Character image"/>
        </div>
        <div className="px-2 gap-6 w-full sm:w-1/2 sm:p-4 text-left text-lg text-white grid grid-cols-auto content-between">
            <p>{`Alias: ${name}`}</p>
            <p>Status: <span className={getStatus(status)}>{status}</span></p>
            <p>{`Last location known: ${locName}`}</p>
        </div>
    </div>
    );
};

export default CardDetails;