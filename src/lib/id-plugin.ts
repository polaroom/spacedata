import { Schema, Document } from 'mongoose'

export const idPlugin = (schema: Schema) => {
  const transform = (_doc: Document, ret: any) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }

  schema.set('toJSON', {
    transform: transform,
  })

  schema.set('toObject', {
    transform: transform,
  })
}
