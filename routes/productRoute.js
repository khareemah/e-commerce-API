const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authenticateUser');
const authorizePermissions = require('../middleware/authorizePermissions');

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController');

router
  .route('/')
  .post(authenticateUser, authorizePermissions('admin'), createProduct)
  .get(getAllProducts);
router
  .route('/uploadImage')
  .post(authenticateUser, authorizePermissions('admin'), uploadImage);
router
  .route('/:id')
  .get(getSingleProduct)
  .patch(authenticateUser, authorizePermissions('admin'), updateProduct)
  .delete(authenticateUser, authorizePermissions('admin'), deleteProduct);
module.exports = router;
