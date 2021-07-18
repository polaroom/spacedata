import * as express from 'express'
import { Error as MongooseError } from 'mongoose'
import { Rocket } from '../models/rocket'

export class RocketController {
  public async listRockets() {
    const rockets = await Rocket.find()
    return rockets
  }

  public async getRocket(req: express.Request<{ id: string }>) {
    const { id } = req.params

    try {
      const rocket = await Rocket.findOne({ _id: id })

      if (!rocket) {
        return {
          message: 'Rocket not found',
          status: 404,
        }
      }

      return rocket
    } catch (err) {
      if (err instanceof MongooseError) {
        return {
          status: 500,
          message: err.message,
        }
      }

      return {
        status: 500,
        message: 'Internal server error',
      }
    }
  }
}
