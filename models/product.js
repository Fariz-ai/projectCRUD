/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Variant, { foreignKey: "prodId", as: "variants" });
    }
  }
  Product.init(
    {
      prod_name: DataTypes.STRING,
      prod_desc: DataTypes.STRING,
      prod_price: DataTypes.FLOAT,
      prod_image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
