const Sequelize = require("sequelize");
const db = require("./database");

const Table2 = db.define("tableTwo", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Table2;
