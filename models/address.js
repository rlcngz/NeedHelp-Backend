"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.belongsTo(models.space);
    }
  }
  address.init(
    {
      street: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      postCode: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      lng: {
        type: DataTypes.FLOAT,
      },
      lat: {
        type: DataTypes.FLOAT,
      },
      spaceId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
