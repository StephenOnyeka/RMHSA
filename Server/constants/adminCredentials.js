// constants/adminCredentials.js
const bcrypt = require("bcryptjs");

const adminEmail = "demo@gmail.com";
const adminPasswords = [
  "$2a$10$OoPVVTBl6z0lHMIJTsT9fOBIA1YCTQPdlAvyednULmU7Ein2ChGRu", // Replace with the actual hashed password
  "$2a$10$wYOD94Pntwx939IUfosPD.kCi60K.uBaZ3MktaQjWbaF6ZQPeL66O", // Replace with the actual hashed password
];

const checkPassword = async (password) => {
  for (const adminPassword of adminPasswords) {
    const isMatch = await bcrypt.compare(password, adminPassword);
    if (isMatch) {
      return true;
    }
  }
  return false;
};

module.exports = { adminEmail, checkPassword };
