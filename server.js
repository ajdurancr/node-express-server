import { Server } from 'dcr-engine'
import mongoose from 'mongoose'

import routes from './src/api/index'
import { mongoDb } from './configs'
import { FRIENDS } from './src/constants/models'

const dbUrl =  `${mongoDb.protocol}://${mongoDb.user}:${mongoDb.password}@${mongoDb.host}:${mongoDb.port}/${FRIENDS}`

mongoose.connect(dbUrl, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const init = async () => {
  const server =  new Server({ port: 3000 })

  await server.createApi(routes)

  server.start()
}

init()
