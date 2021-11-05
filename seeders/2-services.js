"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          title: "House cleaning",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Gardening",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pet Walking",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tax Advisor",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lawyer",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bike Hiring",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("services", null, {});
  },
};
