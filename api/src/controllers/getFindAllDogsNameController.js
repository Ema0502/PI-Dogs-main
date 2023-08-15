require("dotenv").config();
const { END_POINT_URL } = process.env;
const { Dog } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getFindAllDogsNameController = async (name) => {
  //Se trae todo las coincidencias de la db
  const dbResults = await Dog.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });

  //Se busca la coincidencia en la api
  const { data } = await axios(`${END_POINT_URL}/search?q=${name}`);
  //Se guarda solo la informacion necesaria para el resultado
  const dogsNameApi = data.map((dog) => {
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
      temperament: dog.temperament
    };
  });
  //Si hay resultados en ambas busquedas, se retorna lo encontrado en ambas
  const resultTotal = [...dbResults, ...dogsNameApi];
  if (resultTotal.length === 0) {
    throw new Error(`No existen Perros con ese nombre`);
  } else {
    return resultTotal;
  }
};

module.exports = {
  getFindAllDogsNameController,
};
