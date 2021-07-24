import * as express from 'express'
import { CompanyController } from '../lib/controllers'

const controller = new CompanyController()

export const getCompanies = async (
  _req: express.Request,
  res: express.Response,
) => {
  const resp = await controller.getCompanies()
  return res.json(resp)
}

export const getCompany = async (
  req: express.Request<{ id: string }>,
  res: express.Response,
) => {
  const resp = await controller.getCompany(req)

  return res.json(resp)
}

export const createCompany = async (
  req: express.Request,
  res: express.Response,
) => {
  const resp = await controller.createCompany(req)
  return res.json(resp)
}
