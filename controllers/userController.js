const User = require('../models/User');
const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'user' });
  res.status(StatusCodes.OK).json({ count: users.length, users });
};

const getSingleUser = () => {};

const showCurrentUser = () => {};

const updateUser = () => {};
const updateUserPassword = () => {};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
