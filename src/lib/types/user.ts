import { Document } from 'mongoose'

export interface IUser extends Document {
  readonly name: string
  readonly token: string
  readonly role: 'superuser' | 'user' | 'create' | 'update' | 'delete'
}
