import * as mongoose from 'mongoose'
import { ILaunch } from '../types/launch'
import { idPlugin } from '../id-plugin'

const launchSchema = new mongoose.Schema(
  {
    flight_number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    launch_provider: {
      type: mongoose.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    date_utc: {
      type: String,
      required: true,
    },
    date_unix: {
      type: Number,
      required: true,
    },
    date_local: {
      type: String,
      required: true,
    },
    rocket: {
      type: mongoose.Types.ObjectId,
      ref: 'Rocket',
      default: null,
    },
    upcoming: {
      type: Boolean,
      required: true,
    },
    success: {
      type: Boolean,
      default: null,
    },
    launchpad: {
      type: mongoose.Types.ObjectId,
      ref: 'Launchpad',
      default: null,
    },
  },
  { autoCreate: true },
)

launchSchema.plugin(idPlugin)

export const Launch = mongoose.model<ILaunch>('Launch', launchSchema)
