import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const run = async () => {
  await connect('mongodb://localhost:28017/api-test')
  const item = await Item.create({
    name: 'clean up',
    createdBy: mongoose.SchemaTypes.ObjectId,
    list: mongoose.SchemaTypes.ObjectId
  })

  console.log(item)
}

// export default {}
run()
