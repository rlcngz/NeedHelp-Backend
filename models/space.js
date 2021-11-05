"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class space extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      space.belongsTo(models.user);
      space.hasMany(models.review);
      // space.belongsToMany(models.service, {
      //   through: "spaceServices",
      //   foreignKey: "spaceId",
      // });
      space.belongsTo(models.service, {
        through: "services",
        foreignKey: "serviceId",
      });
    }
  }
  space.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      serviceId: { type: DataTypes.INTEGER },
      logoUrl: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "space",
    }
  );
  return space;
};
