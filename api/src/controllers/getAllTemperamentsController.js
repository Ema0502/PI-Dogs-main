require("dotenv").config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { getAllTemperamentsDBController } = require("./getAllTemperamentsDBController");

const getAllTemperamentsController = async () => {

  //Obtenemos los temperaments de la api y se guardan en la db
  const { data } = await axios(`${END_POINT_URL}?api_key=${API_KEY}`);
  const allTemperamentsAPI = data.map((dog) => {
    return dog.temperament;
  });
  // Se crea un Set para almacenar los temperamentos únicos
  const resultFinal = new Set();
  // Se recorre el arreglo de temperamentos obtenido de la API
  allTemperamentsAPI.forEach((temperamentString) => {
    // Para evitar los null, se aplica el condicional
    if (temperamentString) {
      // Se divide el string de temperamentos por comas y se mapea para obtener los temperamentos individuales en un arreglo
      const temperaments = temperamentString
        .split(", ")
        .map((string) => string);
      // Recorrer el arreglo de temperamentos individuales para eliminar duplicados
      return temperaments.forEach((temperament) => {
        return resultFinal.add(temperament);
      });
    }
  });
  //Se trae todos los resultados existentes en la db y se envian al resultado final sin repetidos
  const resultDB = await getAllTemperamentsDBController();
  resultDB.forEach((temperament) => {
    return resultFinal.add(temperament);
  });

  // Convertir el conjunto en un arreglo y devolverlo como resultado final
  return [...resultFinal];
};

module.exports = {
  getAllTemperamentsController,
};
