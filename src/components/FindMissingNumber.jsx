import React from "react";
const FindMissingNumber = ({ numeros }) => {
  const encontrarNumeroUnico = (numeros) => {
    const ocurrencias = {};

    // conteo de ocurrencias de cada numero
    for (let num of numeros) {
      if (ocurrencias[num]) {
        ocurrencias[num]++;
      } else {
        ocurrencias[num] = 1;
      }
    }

    // buscamos el numero único
    for (let num in ocurrencias) {
      if (ocurrencias[num] === 1) {
        return num;
      }
    }

    //si no encontramos ningun numero único
    return (<p>no existe</p>);
  };

  const numeroUnico = encontrarNumeroUnico(numeros);

  return (
    
      <h2>
        El numero único: <span>{numeroUnico}</span>
      </h2>
    
  );
};

export default FindMissingNumber;
