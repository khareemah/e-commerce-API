const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/authenticateUser');
const authorizePermissions = require('../middleware/authorizePermissions');

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin'), getAllUsers);
router
  .route('/me')
  .get(authenticateUser, showCurrentUser)
  .patch(authenticateUser, updateUser);
router
  .route('/me/updateUserPassword')
  .patch(authenticateUser, updateUserPassword);
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
