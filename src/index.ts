import * as express from 'express'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

import { mongodb } from './lib/mongodb'
import { apiRoutes } from './api'

const port = process.env.PORT || 5000
const app = express()

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: process.env.NODE_ENV !== 'development',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
})

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('json spaces', 2)

// Register routes
app.use('/', apiRoutes)

app.use(Sentry.Handlers.errorHandler())

mongodb
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
