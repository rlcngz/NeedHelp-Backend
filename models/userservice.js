"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userService.belongsTo(models.service);
      userService.belongsTo(models.user);
    }
  }
  userService.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      serviceId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "userService",
    }
  );
  return userService;
};
