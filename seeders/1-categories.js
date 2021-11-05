"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Housing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Finance/Law",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Education",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Boat&Bike",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pet Care",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
