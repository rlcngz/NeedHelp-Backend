"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "testuser",
          lastName: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          isService: false,
          // serviceId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          lastName: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          isService: true,
          // serviceId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Erol",
          lastName: "Erol",
          email: "erol@erol.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          isService: true,
          // serviceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "b",
          lastName: "b",
          email: "b@b.com",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          isService: true,
          // serviceId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "c",
          lastName: "c",
          email: "c@c.com",
          password: bcrypt.hashSync("c", SALT_ROUNDS),
          isService: true,
          // serviceId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "d",
          lastName: "d",
          email: "d@d.com",
          password: bcrypt.hashSync("d", SALT_ROUNDS),
          isService: true,
          // serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "e",
          lastName: "e",
          email: "e@e.com",
          password: bcrypt.hashSync("e", SALT_ROUNDS),
          isService: true,
          // serviceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "f",
          lastName: "f",
          email: "f@f.com",
          password: bcrypt.hashSync("f", SALT_ROUNDS),
          isService: true,
          // serviceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
