import * as express from 'express'
import { LaunchController } from '../lib/controllers'

const ctrl = new LaunchController()

export const listLaunches = async (
  _: express.Request,
  res: express.Response,
) => {
  const resp = await ctrl.listLaunches()
  return res.json(resp)
}

export const getLaunch = async (
  req: express.Request<{ id: string }>,
  res: express.Response,
) => {
  const resp = await ctrl.getLaunch(req)
  return res.json(resp)
}

export const createLaunch = async (
  req: express.Request,
  res: express.Response,
) => {
  const resp = await ctrl.createLaunch(req)
  return res.json(resp)
}
