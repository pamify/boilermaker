const Sequelize = require('sequelize');
const db = require('./database');

const Table1 = db.define('tableOne', {
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

module.exports = Table1;
