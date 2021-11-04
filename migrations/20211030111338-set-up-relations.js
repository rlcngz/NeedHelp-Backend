"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("addresses", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "authorId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("reviews", "reviewedId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    // await queryInterface.addColumn("reviews", "spaceId", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "spaces",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "SET NULL",
    // });
    await queryInterface.addColumn("services", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    // await queryInterface.addColumn("users", "serviceId", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "services",
    //     key: "id",
    //   },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("spaces", "userId");
    await queryInterface.removeColumn("addresses", "userId");
    await queryInterface.removeColumn("reviews", "authorId");
    await queryInterface.removeColumn("reviews", "reviewedId");
    // await queryInterface.removeColumn("reviews", "spaceId");
    await queryInterface.removeColumn("services", "categoryId");
    // await queryInterface.removeColumn("users", "serviceId");
  },
};
