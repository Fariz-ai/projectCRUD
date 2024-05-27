/** @format */

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          prod_name: "Samsung Galaxy S22",
          prod_desc:
            "The latest Samsung Galaxy series with large display and high performance CPU",
          prod_price: 10000000,
          prod_image_url:
            "https://images.samsung.com/id/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
