/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Variant.belongsTo(models.Product, {
        foreignKey: "prodId",
        as: "product",
      });
    }
  }
  Variant.init(
    {
      variant_name: DataTypes.STRING,
      variant_color: DataTypes.STRING,
      variant_price: DataTypes.FLOAT,
      prodId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Variant",
    },
    {
      hooks: {
        beforeCreate: (variant) => {
          if (variant.variant_price <= 0) {
            throw new Error("Harga variant harus lebih besar dari 0");
          }
        },
      },
    }
  );
  return Variant;
};
