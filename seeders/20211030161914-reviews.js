"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          star: 4,
          comment: " Taxsight is the best",
          authorId: 1,
          reviewedId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: " ALF is the best lawyer",
          authorId: 1,
          reviewedId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 1,
          comment: " My dog was unhappy",
          authorId: 1,
          reviewedId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: " Walk my dog is the best",
          authorId: 1,
          reviewedId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 3,
          comment: " WMD service is not bad",
          authorId: 2,
          reviewedId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: " My dog is always happy with him",
          authorId: 3,
          reviewedId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: "WMD is doing great job",
          authorId: 2,
          reviewedId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          star: 5,
          comment: "Thanks to WMD",
          authorId: 1,
          reviewedId: 4,
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
