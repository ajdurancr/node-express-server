import { Server } from 'dcr-engine'

import routes from './src/api/index'

const init = async () => {
  const server =  new Server({ port: 3000 })

  await server.createApi(routes)

  server.start()
}

init()
