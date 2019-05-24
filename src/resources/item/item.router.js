import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

// /api/items
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/items/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
