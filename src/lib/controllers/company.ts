import * as express from 'express'
import { Error as MongooseError } from 'mongoose'
import { Company } from '../models/company'
import { transformError } from '../responses/transform-error'

export class CompanyController {
  public async getCompanies() {
    try {
      const companies = await Company.find()
      return companies
    } catch (err) {
      if (err instanceof MongooseError) {
        return {
          status: 500,
          message: err.message,
        }
      }

      return {
        status: 500,
        message: err,
      }
    }
  }

  public async getCompany(req: express.Request<{ id: string }>) {
    const { id } = req.params

    try {
      const company = await Company.findOne({ _id: id })

      return company
    } catch (err) {
      return transformError(err)
    }
  }

  public async createCompany(req: express.Request) {
    try {
      const company = await Company.create(req.body)
      await company.save()

      return company
    } catch (err) {
      return transformError(err)
    }
  }
}
