const { getAllDogsController } = require("../controllers/getAllDogsController");

const getAllDogsHandler = async (req, res) => {
  try {
    // The controller is requested to bring all the dogs
    const allDogsResult = await getAllDogsController();
    return res.status(200).json(allDogsResult);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDogsHandler,
}