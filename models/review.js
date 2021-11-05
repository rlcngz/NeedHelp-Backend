"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.space);
      review.belongsTo(models.user, {
        foreignKey: "reviewedId",
        as: "reviewed",
      });
      review.belongsTo(models.user, {
        foreignKey: "authorId",
        as: "author",
      });
    }
  }
  review.init(
    {
      firstName: { type: DataTypes.STRING },
      comment: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
