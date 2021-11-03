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
      space.belongsToMany(models.service, {
        through: "spaceServices",
        foreignKey: "spaceId",
      });
    }
  }
  space.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
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
