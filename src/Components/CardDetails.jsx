import React, { useEffect } from 'react';

const speciesArray = {
    HUMAN: "Human",
    HUMANOID: "Humanoid",
    ALIEN: "Alien",
    MYTH: "Mythological Creature",
    ANIMAL: "Animal",
    DISEASE: "Disease",
    ROBOT: "Robot",
} 

const CardDetails = ({data}) => {
    const { name, status, species, image, location: {name: locName} } = data;
    
    useEffect(() => {
        getSpecie();
    });

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
    
      const getSpecie = (specie) => {
        let textColor = Math.floor(Math.random()*16777215).toString(16);
        if(specie === speciesArray.HUMAN){
            textColor = "fff0db";
        }
        if(specie === speciesArray.ALIEN){
            textColor = "599441";
        }
        if(species === speciesArray.HUMANOID){
            textColor = "4bbef3";
        }
        if(species === speciesArray.MYTH){
            textColor = "ffaa00";
        }
        if(species === speciesArray.ROBOT){
            textColor = "aea299";
        }
        if(species === speciesArray.ANIMAL){
            textColor = "fdff00";
        }
        if(species === speciesArray.DISEASE){
            textColor = "db28fd";
        }
        const bgColor = "#" + textColor;
        const style = {color: bgColor};
        return style;
    }
    return (
    <div className="m-8 flex-col sm:w-full sm:h-92 flex sm:flex-row content-around border-gray-100 border-sopd">
        <div className="self-center mb-8 w-5/6 h-auto rounded-lg sm:m-4 sm:w-72 overflow-hidden">
            <img className="w-full h-auto rounded-lg transition duration-500 ease-in-out opacity-90 hover:opacity-100 transform hover:-translate-y-1 hover:scale-110" src={image} alt="Character"/>
        </div>
        <div className="px-8 gap-6 w-full sm:w-1/2 sm:p-4 text-left text-lg text-white grid grid-cols-1 content-between">
            <p>{`Alias: ${name}`}</p>
            <p>Status: <span className={getStatus(status)}>{status}</span></p>
            <p>{`Last location known: ${locName}`}</p>
            <p>Specie: <span style={getSpecie(species)}>{species}</span></p>
        </div>
    </div>
    );
};

export default CardDetails;