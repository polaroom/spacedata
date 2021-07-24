import * as express from 'express'

export const home = async (_req: express.Request, res: express.Response) => {
  const data = {
    name: 'Spacedata API',
    documentation: 'https://docs.siberianmh.com/spacedata',
    github: 'https://github.com/siberianmh/spacedata',
    issues_url: 'https://github.com/siberianmh/spacedata/issues',
    license: 'MIT',
  }

  return res.json(data)
}
