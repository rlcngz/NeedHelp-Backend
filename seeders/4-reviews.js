"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          firstName: "testuser",
          comment: " Taxsight is the best",
          authorId: 1,
          reviewedId: 2,
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "testuser",
          comment: " ALF is the best lawyer",
          authorId: 1,
          reviewedId: 3,
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "testuser",
          comment: " My dog was unhappy",
          authorId: 1,
          reviewedId: 4,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "testuser",
          comment: " Walk my dog is the best",
          authorId: 1,
          reviewedId: 4,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          comment: " WMD service is not bad",
          authorId: 2,
          reviewedId: 4,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Erol",
          comment: " My dog is always happy with him",
          authorId: 3,
          reviewedId: 4,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          comment: "WMD is doing great job",
          authorId: 2,
          reviewedId: 4,
          spaceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "testuser",
          comment: "Thanks to WMD",
          authorId: 1,
          reviewedId: 4,
          spaceId: 3,
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
