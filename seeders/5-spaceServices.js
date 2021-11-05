"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaceServices",
      [
        {
          spaceId: 1,
          serviceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 2,
          serviceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 3,
          serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 4,
          serviceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 5,
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 6,
          serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spaceId: 7,
          serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaceServices", null, {});
  },
};
