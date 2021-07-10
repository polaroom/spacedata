import * as mongoose from 'mongoose'
import { IUser } from '../types/user'
import { idPlugin } from '../id-plugin'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['superuser', 'user', 'create', 'update', 'delete'],
    },
  },
  { autoCreate: true },
)

userSchema.plugin(idPlugin)

export const User = mongoose.connection
  .useDb('spacedata-auth')
  .model<IUser>('User', userSchema)
