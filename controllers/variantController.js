/** @format */

const { Variant } = require("../models");

const variantController = {};

// Create new variant
variantController.createVariant = async (req, res) => {
  try {
    const { variant_name, variant_color, variant_price } = req.body;
    const { productId } = req.params;
    const variant = await Variant.create({
      variant_name,
      variant_color,
      variant_price,
      prodId: productId,
    });
    res.status(201).json(variant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get variant by Id
variantController.getVariant = async (req, res) => {
  const { id } = req.params;
  try {
    const variant = await Variant.findByPk(id);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }
    res.status(200).json(variant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get variants by productId
variantController.getVariantsByProductId = async (req, res) => {
  try {
    const variants = await Variant.findAll({
      where: { prodId: req.params.productId },
    });
    res.render("variants", {
      productId: req.params.productId,
      variants: variants,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update variant
variantController.updateVariant = async (req, res) => {
  const { id } = req.params;
  const { prodId, variant_name, variant_color, variant_price } = req.body;
  try {
    const [updatedCount, updatedVariant] = await Variant.update(
      {
        prodId,
        variant_name,
        variant_color,
        variant_price,
      },
      {
        where: { id },
        returning: true,
      }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Variant not found" });
    }
    res.status(200).json(updatedVariant[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Variant by Id
variantController.deleteVariant = async (req, res) => {
  const { id } = req.params;
  try {
    const variant = await Variant.findByPk(id);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }
    const productId = variant.prodId;
    await Variant.destroy({
      where: { id },
    });
    res.redirect(`/products/${productId}/variants`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = variantController;
