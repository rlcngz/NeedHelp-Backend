"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      service.hasMany(models.review);
      // service.belongsTo(models.space);
      service.belongsTo(models.category);
      service.belongsToMany(models.user, {
        through: "userServices",
        foreignKey: "serviceId",
      });
    }
  }
  service.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "service",
    }
  );
  return service;
};
