const { Dog } = require("../db");

const postDogController = async (dogDataBody) => {
  //A destructuring is done to make it easier to read the code
  const { image, name, height, weight, life_span, temperament } = dogDataBody;
  const newDog = {
    image,
    name,
    height,
    weight,
    life_span,
    temperament
  };
  //The new dog is created in the db
  const dogCreate = await Dog.create(newDog);
  return dogCreate;
}

module.exports = {
  postDogController,
}