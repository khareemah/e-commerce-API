const {
  createTokenUser,
  attachCookiesToResponse,
  isTokenValid,
} = require('./jwt');

const checkPermissions = require('./checkPermissions');
module.exports = {
  createTokenUser,
  attachCookiesToResponse,
  isTokenValid,
  checkPermissions,
};
