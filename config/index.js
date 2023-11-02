const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const data = {
  db_url: process.env.db_url,
  PORT: process.env.port,
};

module.exports = data;
