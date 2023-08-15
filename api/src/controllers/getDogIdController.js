require('dotenv').config();
const { API_KEY, END_POINT_URL } = process.env;
const axios = require("axios");
const { Dog } = require("../db");

const getDogIdController = async (id) => {
  //Se hace una busqueda en la db si el id tiene una longitud grande ( por el UUID de la db)
  if (id.length > 3) {
    const dbResult = await Dog.findByPk(id);
    return dbResult;
  }

  //Si hay un perro con es id recibido, lo retornamos
  const { data } = await axios(`${END_POINT_URL}/${id}?api_key=${API_KEY}`);
  //Se extraen solamente los datos solicitados de la api para retornarlos
  const dogById = {
    id,
    name: data.name,
    image: data.image?.url || `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg` || "",
    height: data.height?.metric,
    weight: data.height?.metric,
    life_span: data.life_span,
    temperament: data.temperament
  }
  return dogById;
}

module.exports = {
  getDogIdController,
}