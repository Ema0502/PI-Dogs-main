const { postDogController } = require("../controllers/postDogController");

const postDogHandler = async (req, res) => {
  try {
    //Para crear el nuevo perro, sacamos del body la informacion para el controller
    const dogDataBody = req.body;
    const result = await postDogController(dogDataBody);
    return res.status(201).json({ message: "Dog successfully created", data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  postDogHandler,
}