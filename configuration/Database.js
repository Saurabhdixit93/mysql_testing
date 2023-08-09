const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv").config();

// Replace the placeholders with your actual database credentials
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST_NAME,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

module.exports = { sequelize, DataTypes };
