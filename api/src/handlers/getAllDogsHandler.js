const { getAllDogsController } = require("../controllers/getAllDogsController");
const { Dog } = require("../db");

const getAllDogsHandler = async (req, res) => {
  try {
    const allDogsResult = await getAllDogsController();
    return res.status(200).json(allDogsResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDogsHandler,
}