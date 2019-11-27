const request = require('supertest')
const { Server } = require('../server')

describe('Server', () => {
  describe('/alive', () => {
    it('returns 200 indicating the process is alive', async () => {
      const app = await Server()
      const response = await request(app).get('/alive')

      expect(response.status).toEqual(200)
    })
  })

  describe('/ready', () => {
    it('returns 200 indicating the process is ready', async () => {
      const app = await Server()
      const response = await request(app).get('/ready')

      expect(response.status).toEqual(200)
    })
  })
})
