"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class spaceService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      spaceService.belongsTo(models.service);
      spaceService.belongsTo(models.space);
    }
  }
  spaceService.init(
    {
      spaceId: { type: DataTypes.INTEGER, allowNull: false },
      serviceId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "spaceService",
    }
  );
  return spaceService;
};
