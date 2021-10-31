"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Taxsight",
          description: "Best tax advisor in town",
          logoUrl:
            "https://www.iamsterdam.com/media/in-amsterdam/logos-partners/taxsight-logo.jpg?as=false&h=338&w=600&iar=true ",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ALF",
          description: "Best lawyer in town",
          logoUrl:
            "https://media-exp1.licdn.com/dms/image/C560BAQFujeLYqEy-qA/company-logo_200_200/0/1624390690515?e=2159024400&v=beta&t=ILbG9MszJmcKpCwkHb5VJX2BWOoA5Jc1gOwsnVqKSX8",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk My Dog",
          description: "Dog walking in amsterdam",
          logoUrl:
            "http://www.walkmydogamsterdam.nl/wp-content/uploads/2020/12/cropped-LOGO_WalkMyDog_website-1.jpg",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "AMS Advocaten",
          description: "Best lawyers",
          logoUrl:
            "https://www.amsadvocaten.com/app/themes/ams-theme/dist/images/logo_efc0ad8c.png",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
