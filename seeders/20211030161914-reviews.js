"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          star: 4,
          comment: " This is a test comment",
          userId: 1,
          serviceId: 2,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: " This is a test comment",
          userId: 1,
          serviceId: 3,
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 1,
          comment: " This is a test comment",
          userId: 1,
          serviceId: 4,
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
