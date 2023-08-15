const { putDogController } = require("../controllers/putDogController");

const putDogHandler = async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperament } = req.body;
    //Se crea un objeto con las modificaciones que lleguen por body y, si existen, se agregan
    const modifications = {};
    if (name) modifications.name = name;
    if (image) modifications.image = image;
    if (height) modifications.height = height;
    if (weight) modifications.weight = weight;
    if (life_span) modifications.life_span = life_span;
    if (temperament) modifications.temperament = temperament;
    //Cuando todas las modificaciones estan listas, se mandan al controller
    const dogModified = await putDogController(modifications);
    return res.status(200).json(dogModified);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putDogHandler,
};