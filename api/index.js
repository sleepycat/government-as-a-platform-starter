require('dotenv-safe').config()
const { Server } = require('./src/server')

const { PORT = 3000 } = process.env

;(async () => {
  const server = await Server()

  try {
    server.listen({ port: PORT }, () =>
      // eslint-disable-next-line no-console
      console.info(`🚀 API listening on port ${PORT}`),
    )
  } catch (e) {
    console.error(e.message)
  }
})()
