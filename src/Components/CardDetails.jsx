import React from 'react';

const CardDetails = ({data}) => {
    const {id: charId, name, type, species, image, location: {name: locName} } = data;
    return (
    <div className="mx-4 w-full flex flex-row border-gray-100 border-solid">
        <img className="w-1/3 rounded-lg" src={image} alt="Character image"/>
        <div className="w-full text-left p-4 text-lg text-white">
            <p>{`Alias: ${name}`}</p>
            <p>{`Last location known: ${locName}`}</p>
        </div>
    </div>
    );
};

export default CardDetails;