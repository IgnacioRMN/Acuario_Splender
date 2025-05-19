const express = requiere(`express`);
const router = express.Router();
const Product = require(`../models/product.models`);

// middleware
const getProduct = async (req, res, next) => {
  let product;
  const { id } = req.params;

  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({
      message: "El ID no es válido",
    });
  }
};

try {
  product = await Product.findById(id);
  if (!book) {
    return res.status(404).json({
      message: "El producto no fue encontrado",
    });
  }
} catch (error) {
  return res.status(500).json({
    message: error.message,
  });
}

res.product = product;
next();

// obtener todos los productos // GET
router.get(`/`, async (req, res) => {
  try {
    const products = await Product.find();
    console.log(`GET ALL`, products);
    if (products.length === 0) {
      return res.status(204).json([]);
    }
    res(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// crear un nuevo producto // POST
router.post(`/`, async (req, res) => {
  const { nombre, precio, descripcion, img, stock, fechaRegistro, categoria } =
    req?.body;
  if (
    !nombre ||
    !precio ||
    !descripcion ||
    !img ||
    !stock ||
    !fechaRegistro ||
    !categoria
  ) {
    return res.status(400).json({
      message: `Los campos nombre, precio, descripcion, img, stock, fechaRegistro y categoria son obligatorios`,
    });
  }

  const product = new Product({
    nombre,
    precio,
    descripcion,
    img,
    stock,
    fechaRegistro,
    categoria,
  });

  try {
    const newProduct = await product.save();
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
