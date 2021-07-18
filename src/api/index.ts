import * as express from 'express'

const router = express.Router()

//#region Imports

// Meta

// Companies
import { getCompanies, getCompany } from './company'

// Rockets
import { listRockets, getRocket } from './rocket'

//#endregion

//#region Usage

// Companies
router.get('/companies', getCompanies)
router.get('/companies/:id', getCompany)

// Rockets
router.get('/rockets', listRockets)
router.get('/rockets/:id', getRocket)

//#endregion

export const apiRoutes: express.Router = router
