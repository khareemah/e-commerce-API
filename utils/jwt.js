const jwt = require('jsonwebtoken');
const createTokenUser = (user) => {
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    userId: user._id,
  };
};
const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const attachCookiesToResponse = (res, tokenUser) => {
  const token = createJWT(tokenUser);
  const oneDay = 24 * 60 * 60 * 1000;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
};
module.exports = { createTokenUser, attachCookiesToResponse, isTokenValid };
