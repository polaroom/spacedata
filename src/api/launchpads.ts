import * as express from 'express'
import { LaunchpadController } from '../lib/controllers'

const ctrl = new LaunchpadController()

export const getAllLaunchpads = async (
  _: express.Request,
  res: express.Response,
) => {
  const resp = await ctrl.getAllLaunchpads()

  return res.json(resp)
}

export const getLaunchpad = async (
  req: express.Request<{ id: string }>,
  res: express.Response,
) => {
  const resp = await ctrl.getLaunchpad(req)

  return res.json(resp)
}

export const createLaunchpad = async (
  req: express.Request<{ id: string }>,
  res: express.Response,
) => {
  const resp = await ctrl.createLaunchpad(req)

  return res.json(resp)
}
