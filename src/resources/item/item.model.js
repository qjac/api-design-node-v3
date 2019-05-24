import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      maxlength: 50,
      required: true,
      trim: true,
      type: String
    },
    status: {
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true,
      type: String
    },
    notes: String,
    due: Date,
    createdBy: { ref: 'user', required: true, type: Object },
    list: { ref: 'list', required: true, type: Array }
  },
  { timestamps: true }
)
export const Item = mongoose.model('item', itemSchema)
