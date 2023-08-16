const { getFindAllDogsNameController } = require("../controllers/getFindAllDogsNameController");

const getDogsNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    // Convert the name to lowercase to avoid errors with the db or api, they are sent to the controller for a match search
    const allFindResults = await getFindAllDogsNameController(name.toLowerCase());
    return res.status(200).json(allFindResults);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDogsNameHandler,
};
