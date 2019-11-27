const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./schema')

const Server = async (context = {}) => {
  const app = express()

  app.get('/alive', (_req, res) => {
    res.send('yes')
  })

  app.get('/ready', async (_req, res) => {
    res.send('yes')
  })

  app.use('/', express.json(), graphqlHTTP({ schema, graphiql: true, context }))

  return app
}

module.exports.Server = Server
