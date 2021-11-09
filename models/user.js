"use strict";

const { Model } = require("sequelize");
const review = require("./review");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.space);
      // user.hasOne(models.address);
      // user.hasOne(models.service);
      user.belongsToMany(models.user, {
        through: "reviews",
        foreignKey: "reviewedId",
        as: "reviewed",
      });
      user.belongsToMany(models.user, {
        through: "reviews",
        foreignKey: "authorId",
        as: "author",
      });
      user.belongsToMany(models.service, {
        through: "userServices",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isService: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      // serviceId: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
