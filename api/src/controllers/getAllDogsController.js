require('dotenv').config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");

const getAllDogsController = async () => {
  //Se consulta si hay registros en la base de datos, si los hay, se los prepara para el return
  const allDogsDB = await Dog.findAll();
  //Si no hay registros en la base de datos, obtenemos los perros de la api y se guardan en la db
  const { data } = await axios(`${END_POINT_URL}?api_key=${API_KEY}`);
  const allResultApi = data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image:
        dog.image?.url ||
        `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg` ||
        "",
      height: dog.height?.metric,
      weight: dog.height?.metric,
      life_span: dog.life_span,
      temperament: dog.temperament,
      idApi: dog.id
    };
  });
  if (allDogsDB) return [...allDogsDB, ...allResultApi]
  return allResultApi;
}

module.exports = {
  getAllDogsController,
}