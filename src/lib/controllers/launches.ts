import * as express from 'express'
import { transformError } from '../responses/transform-error'
import { Launch } from '../models/launches'

export class LaunchController {
  public async listLaunches() {
    try {
      const launches = Launch.find()
      return launches
    } catch (err) {
      return transformError(err)
    }
  }

  public async getLaunch(req: express.Request<{ id: string }>) {
    const { id } = req.params

    try {
      const launch = Launch.findOne({ _id: id })
      return launch
    } catch (err) {
      return transformError(err)
    }
  }

  public async createLaunch(req: express.Request) {
    try {
      const launch = await Launch.create(req.body)
      await launch.save()

      return launch
    } catch (err) {
      return transformError(err)
    }
  }
}
