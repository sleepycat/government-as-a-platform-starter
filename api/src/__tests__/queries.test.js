const request = require('supertest')
const { Server } = require('../server')

describe('Queries', () => {
  describe('hello', () => {
    it('greets the world', async () => {
      const app = await Server({})

      const response = await request(app)
        .post('/graphql')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({
          query: `
              {
                hello
              }
            `,
        })

      const { data } = response.body
      expect(data).toEqual({ hello: 'world' })
    })
  })
})
