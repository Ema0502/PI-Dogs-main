const { getAllTemperamentsDBController } = require("../controllers/getAllTemperamentsDBController");

const getAllTemperamentsDBHandler = async (req, res) => {
  try {
    // The controller is asked for all the temperaments of the dogs
    const allTemperamentsDB = await getAllTemperamentsDBController();
    return res.status(200).json(allTemperamentsDB);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllTemperamentsDBHandler,
}