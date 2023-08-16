const { getDogIdController } = require("../controllers/getDogIdController");

const getDogIdHandler = async (req, res) => {
  try {
    // The id is fetched and sent to the controller to fetch a specific dog
    const { id } = req.params;
    const dog = await getDogIdController(id);
    return res.status(200).json(dog);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getDogIdHandler,
}