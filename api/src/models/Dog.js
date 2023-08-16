const { DataTypes } = require('sequelize');
// We export a function that defines the model
// Then we inject the connection to sequelize.
module.exports = (sequelize) => {
  // I define the model
  sequelize.define("Dog", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.STRING,
    },
    idApi: {
      type:DataTypes.INTEGER,
    }
  }, { freezeTableName: true });
};
