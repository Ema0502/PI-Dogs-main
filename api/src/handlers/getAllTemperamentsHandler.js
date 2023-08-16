const { getAllTemperamentsController } = require("../controllers/getAllTemperamentsController");

const getAllTemperamentsHandler = async (req, res) => {
  try {
    // Gets all the controller temperaments
    const allTemperaments = await getAllTemperamentsController();
    return res.status(200).json(allTemperaments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllTemperamentsHandler
}