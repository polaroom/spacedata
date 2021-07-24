import * as express from 'express'
import { Launchpad } from '../models/launchpads'
import { transformError } from '../responses/transform-error'

export class LaunchpadController {
  public async getAllLaunchpads() {
    try {
      const result = await Launchpad.find()
      return result
    } catch (err) {
      return transformError(err)
    }
  }

  public async getLaunchpad(req: express.Request<{ id: string }>) {
    const { id } = req.params

    try {
      const result = await Launchpad.findOne({ _id: id })
      return result
    } catch (err) {
      return transformError(err)
    }
  }

  public async createLaunchpad(req: express.Request) {
    try {
      const launchpad = await Launchpad.create(req.body)
      await launchpad.save()

      return launchpad
    } catch (err) {
      return transformError(err)
    }
  }
}
