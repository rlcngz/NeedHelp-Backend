"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          title: "House cleaning",
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pet care",
          catId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tax Advisor",
          catId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Lawyer",
          catId: 2,
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
