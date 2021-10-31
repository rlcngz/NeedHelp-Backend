"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userServices",
      [
        {
          serviceId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 4,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 2,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userServices", null, {});
  },
};
