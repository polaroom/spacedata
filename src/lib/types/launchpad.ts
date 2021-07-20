import { Document } from 'mongoose'

export interface ILaunchpad extends Document {
  readonly name: string
  readonly full_name: string
  readonly owner: string
  readonly status:
    | 'active'
    | 'inactive'
    | 'unknown'
    | 'retired'
    | 'lost'
    | 'under construction'
  readonly locality: string
  readonly region: string
  readonly timezone: string
  readonly latitude: string
  readonly longitude: string
  readonly launch_attempts: number
  readonly launch_successes: number
  readonly rockets: Array<string>
  readonly launches: Array<string>
  readonly details: string
}
