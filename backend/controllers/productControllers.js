import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single Product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});

// @desc Delete a Product
// @route DELETE PRODUCT /api/products/:id
// @access Private Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});

// @desc Create a Product
// @route POST PRODUCT /api/products/
// @access Private Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample',
    image: '/images/sample.png',
    description: 'Sample',
    author: 'Sample',
    genre: 'Sample',
    price: 0.0,
    countInStock: 0,
    rating: 0.0,
    numReviews: 0,
    user: req.user._id,
  });
  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

// @desc Update a Product
// @route PUT PRODUCT /api/products/:id
// @access Private Admin
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  const {
    name,
    price,
    description,
    image,
    genre,
    author,
    countInStock,
  } = req.body;
  if (product) {
    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.author = author || product.author;
    product.genre = genre || product.genre;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.json(404);
    throw new Error('Product Not Found');
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
