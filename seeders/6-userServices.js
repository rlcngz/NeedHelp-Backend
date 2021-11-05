"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userServices",
      [
        {
          serviceId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 5,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 3,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 5,
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 1,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 1,
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          serviceId: 1,
          userId: 8,
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
