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
    <div className="mx-4 w-full flex flex-row content-around border-gray-100 border-solid">
        <div className="image-container rounded-lg mr-4">
            <img className="image w-auto h-auto rounded-lg" src={image} alt="Character image"/>
        </div>
        <div className="w-full text-left p-4 text-lg text-white grid grid-cols-auto content-between">
            <p>{`Alias: ${name}`}</p>
            <p>Status: <span className={getStatus(status)}>{status}</span></p>
            <p>{`Last location known: ${locName}`}</p>
        </div>
    </div>
    );
};

export default CardDetails;