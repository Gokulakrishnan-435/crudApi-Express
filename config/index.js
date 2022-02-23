require("dotenv").config();

module.exports = {
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};
