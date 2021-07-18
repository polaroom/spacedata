import { Document } from 'mongoose'
import { IMetersAndFeets, IKgAndLb, IKnAndLbf } from './shared'

export interface IRocketFirstStage extends Document {
  readonly reusable: boolean
  readonly engines: number
  readonly burn_time_sec: number
  readonly thrust_sea_level: IKnAndLbf
}

export interface IRocketSecondStage extends Document {
  readonly engines: number
  readonly burn_time_sec: number
  readonly thrust: IKnAndLbf
}

export interface IRocket extends Document {
  readonly name: string
  readonly type: string
  readonly active: boolean
  readonly stages: number
  readonly cost_per_launch: number
  readonly height: IMetersAndFeets
  readonly diameter: IMetersAndFeets
  readonly mass: IKgAndLb
  readonly payload_weights: Record<string, string>
  readonly first_stage: IRocketFirstStage
  readonly second_stage: IRocketSecondStage
}
