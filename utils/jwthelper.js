const jwt = require("jsonwebtoken");

let verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

let jwtHelper = {
  verifyToken,
};

module.exports = jwtHelper;
