/** @format */

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Variants",
      [
        {
          variant_name: "Silver Bright Case",
          variant_color: "Silver Bright",
          variant_price: 10100000,
          prodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          variant_name: "Yellow Case",
          variant_color: "Yellow",
          variant_price: 10200000,
          prodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          variant_name: "Shapire Case",
          variant_color: "Shapire",
          variant_price: 10300000,
          prodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Variants", null, {});
  },
};
