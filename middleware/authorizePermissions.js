const { UnauthorizedError } = require('../errors');
const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};
// const authorizePermissions = (req, res, next) => {
//   console.log(req.user);
//   const { role } = req.user;
//   if (role !== 'admin') {
//     throw new UnauthorizedError('Unauthorized to access this route');
//   }
//   next();
// };

module.exports = authorizePermissions;
