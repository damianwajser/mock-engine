const Sequelize = require('sequelize')
const EndpointModel = require('../models/EndpointModel')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Users/damianwajser/git/node-js-getting-started/testData/data.sqlite'
})

const Endpoint = EndpointModel(sequelize, Sequelize)

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Endpoint
}