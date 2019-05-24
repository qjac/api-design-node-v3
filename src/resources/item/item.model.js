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
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    list: { type: mongoose.SchemaTypes.ObjectId, ref: 'list', required: true }
  },
  { timestamps: true }
)

itemSchema.index({ list: 1, name: 1 }, { unique: true })
export const Item = mongoose.model('item', itemSchema)
