"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Taxsight",
          description: "Best tax advisor in town",
          type: "Tax advisor",
          logoUrl:
            "https://www.iamsterdam.com/media/in-amsterdam/logos-partners/taxsight-logo.jpg?as=false&h=338&w=600&iar=true ",
          userId: 2,
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ALF",
          description: "Best lawyer in town",
          type: "Lawyer",
          logoUrl:
            "https://media-exp1.licdn.com/dms/image/C560BAQFujeLYqEy-qA/company-logo_200_200/0/1624390690515?e=2159024400&v=beta&t=ILbG9MszJmcKpCwkHb5VJX2BWOoA5Jc1gOwsnVqKSX8",
          userId: 3,
          price: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Walk My Dog",
          description: "Dog walking in amsterdam",
          type: "Pet walking",
          logoUrl:
            "http://www.walkmydogamsterdam.nl/wp-content/uploads/2020/12/cropped-LOGO_WalkMyDog_website-1.jpg",
          userId: 4,
          price: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "AMS Advocaten",
          description: "Best lawyers",
          type: "Lawyer",
          logoUrl:
            "https://www.amsadvocaten.com/app/themes/ams-theme/dist/images/logo_efc0ad8c.png",
          userId: 5,
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Clean the house",
          description: "Best cleaner in town",
          type: "House cleaning",
          logoUrl:
            "https://image.shutterstock.com/image-photo/cleaning-service-bucket-sponges-chemicals-260nw-567746173.jpg",
          userId: 6,
          price: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Quality Cleaning",
          description: "Best cleaner in town",
          type: "House cleaning",
          logoUrl:
            "https://media.istockphoto.com/vectors/cleaning-service-house-cleaning-services-with-various-cleaning-tools-vector-id607460892",
          userId: 7,
          price: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Best Gardening",
          description: "Best gardeners in town",
          type: "Gardening",
          logoUrl:
            "https://i.pinimg.com/564x/92/10/d2/9210d293a5188e0bf0fe63a48321db57.jpg",
          userId: 8,
          price: 30,
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
