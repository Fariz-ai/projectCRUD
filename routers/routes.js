/** @format */

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const variantController = require("../controllers/variantController");

// Routes for Products
router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put("/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProduct);

// Routes for Variants
router.post("/variants/:productId", variantController.createVariant);
router.get("/variants/:id", variantController.getVariant);
router.get(
  "/products/:productId/variants",
  variantController.getVariantsByProductId
);
router.put("/variants/:id", variantController.updateVariant);
router.delete("/variants/:id", variantController.deleteVariant);

module.exports = router;
