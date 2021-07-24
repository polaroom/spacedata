import * as express from 'express'

import { requireAuth } from '../lib/require-auth'

const router = express.Router()

//#region Imports

// Meta
import { home } from './home'

// Companies
import { getCompanies, getCompany, createCompany } from './company'

// Rockets
import { listRockets, getRocket, createRocket } from './rocket'

// Launchpads
import { getAllLaunchpads, getLaunchpad, createLaunchpad } from './launchpads'

// Launches
import { listLaunches, getLaunch, createLaunch } from './launches'

//#endregion

//#region Usage

// Meta
router.get('/', home)

// Companies
router.get('/companies', getCompanies)
router.get('/companies/:id', getCompany)

router.post('/companies', requireAuth, createCompany)

// Rockets
router.get('/rockets', listRockets)
router.get('/rockets/:id', getRocket)

router.post('/rockets', requireAuth, createRocket)

// Launchpads
router.get('/launchpads', getAllLaunchpads)
router.get('/launchpads/:id', getLaunchpad)

router.post('/launchpads', requireAuth, createLaunchpad)

// Launches
router.get('/launches', listLaunches)
router.get('/launches/:id', getLaunch)

router.post('/launches', requireAuth, createLaunch)

//#endregion

export const apiRoutes: express.Router = router
