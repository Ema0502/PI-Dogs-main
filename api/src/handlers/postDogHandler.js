const { postDogController } = require("../controllers/postDogController");

const postDogHandler = async (req, res) => {
  try {
    // To create the new dog, we take the information from the body and send it to the controller
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