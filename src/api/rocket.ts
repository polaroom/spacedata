import * as express from 'express'
import { RocketController } from '../lib/controllers'

const controller = new RocketController()

export const listRockets = async (
  _req: express.Request,
  res: express.Response,
) => {
  const resp = await controller.listRockets()
  return res.json(resp)
}

export const getRocket = async (
  req: express.Request<{ id: string }>,
  res: express.Response,
) => {
  const resp = await controller.getRocket(req)

  if ('message' in resp) {
    return res.status(resp.status).json(resp)
  }

  return res.json(resp)
}
