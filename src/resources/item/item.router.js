import { Router } from 'express'
// import controllers from './item.controllers'

const controllers = (req, res) => {
  res.send({ msg: 'hi' })
}

const router = Router()
// /api/item

router
  .route('/')
  .get(controllers)
  .post(controllers)

// /api/item/:id
router
  .route('/:id')
  .get(controllers)
  .put(controllers)
  .delete(controllers)

export default router
