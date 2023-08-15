const { Dog } = require("../db");

const postDogController = async (dogDataBody) => {
  //Se hace un destructuring para mayor facilidad al leer el codigo
  const { image, name, height, weight, life_span, temperament } = dogDataBody;
  const newDog = {
    image,
    name,
    height,
    weight,
    life_span,
    temperament
  };
  //Se crea el nuevo perro en la db
  const dogCreate = await Dog.create(newDog);
  return dogCreate;
}

module.exports = {
  postDogController,
}