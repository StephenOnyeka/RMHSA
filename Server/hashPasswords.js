// hashPasswords.js
const bcrypt = require("bcryptjs");

const passwords = ["12345MN", "12345AD"];

const hashPasswords = async (passwords) => {
  const hashedPasswords = [];
  for (const password of passwords) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    hashedPasswords.push(hashedPassword);
  }
  return hashedPasswords;
};

hashPasswords(passwords).then((hashed) => {
  console.log(hashed);
});
