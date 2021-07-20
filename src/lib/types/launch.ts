import { Document } from 'mongoose'

export interface ILaunch extends Document {
  readonly flight_number: number
  readonly name: string
  readonly launch_provider: string
  readonly date_utc: string
  readonly date_unix: number
  readonly date_local: string
  readonly rocket: string
  readonly upcoming: string
  readonly success: boolean
  readonly details: string
}
