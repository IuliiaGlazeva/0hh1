const Sequelize = require('sequelize')
const sequelize = require('../models').sequelize


const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
    
  }, email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
	timestamps: false
})

module.exports = User
