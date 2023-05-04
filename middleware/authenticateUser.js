const { UnauthenticatedError } = require('../errors');
const { isTokenValid } = require('../utils');

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  try {
    const payload = isTokenValid(token);
    const { name, role, userId } = payload;
    req.user = { name, role, userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

module.exports = authenticateUser;
