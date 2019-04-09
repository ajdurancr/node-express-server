import { Router } from 'dcr-engine'

import model from '../models/friends'

const usersRouter = Router()

const errorHandler = (res) => ({ message }) => {
  res.status(500).send({ error: message })
}

usersRouter.get('/', (req, res, next) => {
  model.find({}).then((docs) => {
    res.send(docs)
  })
  .catch(({ message }) => {
    res.status(500).send({ error: message })
  }) // TODO: change this to use .catch(next)
})

usersRouter.get('/:id', (req, res, next) => {
  const { id: _id } = req.params

  model.find({ _id }).then((doc) => {
    res.send(doc)
  })
  .catch(({ message }) => {
    res.status(500).send({ error: message })
  }) // TODO: change this to use .catch(next)
})

usersRouter.post('/', (req, res, next) => {
  model.create(req.body).then((doc) => {
    res.send(doc)
  })
  .catch(({ message }) => {
    res.status(500).send({ error: message })
  }) // TODO: change this to use .catch(next)
})

usersRouter.put('/', async(req, res, next) => {
  const { _id } = req.body

  await model.updateOne({ _id }, req.body).catch(({ message }) => {
  res.status(500).send({ error: message })
}) // TODO: change this to use .catch(next)

  model.find({ _id }).then((doc) => {
    res.send(doc)
  })
  .catch(({ message }) => {
    res.status(500).send({ error: message })
  }) // TODO: change this to use .catch(next)
})

usersRouter.delete('/:id', async(req, res, next) => {
  const { id: _id } = req.params

  model.deleteOne({ _id }).then(({ deletedCount }) => {
    res.send({ deletedCount })
  })
  .catch(({ message }) => {
    res.status(500).send({ error: message })
  }) // TODO: change this to use .catch(next)
})

export default usersRouter