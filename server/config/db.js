const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
  
  },
)

sequelize.sync()
module.exports = sequelize