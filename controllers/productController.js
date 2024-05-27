/** @format */

const { Product, Variant } = require("../models");

const productController = {};

// Create a new product
(productController.createProduct = async (req, res) => {
  try {
    const { prod_name, prod_desc, prod_price, prod_image_url } = req.body;
    const newProduct = await Product.create({
      prod_name,
      prod_desc,
      prod_price,
      prod_image_url,
    });
    res.redirect("/products");
  } catch (error) {
    console.error(error);
    if (
      error.name === "SequelizeValidationError" ||
      error.message === "Harga produk harus lebih besar dari 0"
    ) {
      const validationErrors = error.errors
        ? error.errors.map((err) => err.message)
        : [error.message];
      return res
        .status(400)
        .json({ message: "Validation error", errors: validationErrors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
}),
  // Read All Products
  (productController.getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll({
        include: {
          model: Variant,
          as: "variants",
        },
      });
      if (!products.length) {
        return res.status(404).json({ message: "No products found" });
      }
      res.render("products", { products });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

// Read a product by ID
productController.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: {
        model: Variant,
        as: "variants",
      },
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a product by ID
productController.updateProductById = async (req, res) => {
  const { id } = req.params;
  const { prod_name, prod_desc, prod_price, prod_image_url } = req.body;
  try {
    const [updatedCount, updatedProduct] = await Product.update(
      {
        prod_name,
        prod_desc,
        prod_price,
        prod_image_url,
      },
      {
        where: { id },
        returning: true,
      }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a product by ID
productController.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.destroy({
      where: { id },
    });
    res.redirect(`/products`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = productController;
