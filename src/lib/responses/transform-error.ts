import { Error as MongooseError } from 'mongoose'

// Transform `unknown` error type to all possible known
// types
export const transformError = (err: unknown, status: number = 500) => {
  if (err instanceof MongooseError) {
    return {
      status,
      message: err.message,
    }
  }

  return {
    status,
    message: err,
  }
}
