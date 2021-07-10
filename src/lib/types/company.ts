import { Document } from 'mongoose'

export interface ICompany extends Document {
  readonly name: string
  readonly founder: string
  readonly founded: number
  readonly employees: number
  readonly vehicles: number
  readonly launch_sites: number
  readonly ceo: string
  readonly cto: string
  readonly valuation: string
  readonly summary: string
  readonly headquarters: {
    readonly address: string
    readonly city: string
    readonly state: string
  }
  readonly links: {
    readonly website: string
    readonly flickr: string
    readonly twitter: string
  }
}
