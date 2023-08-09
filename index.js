const express = require("express");
const { sequelize } = require("./configuration/Database");
const PORT = 5000;
const app = express();
app.get("/", (req, res) => {
  return res.json("Success");
});

const dotenv = require("dotenv").config();
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log("Server Running in :", PORT);
    });
  })
  .catch((error) => {
    console.log("Error In Connecting Db :", error);
  });
