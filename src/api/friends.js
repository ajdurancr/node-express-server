import { Router } from 'dcr-engine'

const usersRouter = Router()

usersRouter.get('/:friendName', (req, res) => {
  const { friendName } = req.params

  return res.send({ greeting: `Hi ${friendName}!` });
});

export default usersRouter