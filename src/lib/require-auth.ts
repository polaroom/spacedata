import * as express from 'express'
import { User } from './models/user'

export async function requireAuth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const errorResponse = {
    status: 401,
    message: 'https://open.spotify.com/album/2I6w7VmxNj282kaYTWgO7N',
  }

  if (!req.headers.authorization) {
    return res.status(401).json(errorResponse)
  }

  const [prefix, token] = req.headers['authorization'].split(' ')
  if (prefix !== 'Bearer') {
    return res.status(401).json(errorResponse)
  }

  const user = await User.findOne({ token })

  if (!user) {
    return res.status(401).json(errorResponse)
  }

  return next()
}
