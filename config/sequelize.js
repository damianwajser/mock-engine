const Sequelize = require('sequelize')
const UserModel = require('../models/UserModel')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Users/damianwajser/git/node-js-getting-started/testData/data.sqlite'
})

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User
}