import * as mongoose from 'mongoose'
import { idPlugin } from '../id-plugin'
import { ILaunchpad } from '../types/launchpad'

const launchpadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    full_name: {
      type: String,
      default: null,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
    status: {
      type: String,
      enum: [
        'active',
        'inactive',
        'unknown',
        'retired',
        'lost',
        'under construction',
      ],
      required: true,
    },
    locality: {
      type: String,
      default: null,
    },
    region: {
      type: String,
      default: null,
    },
    timezone: {
      type: String,
      default: null,
    },
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
    launch_attempts: {
      type: Number,
      default: 0,
    },
    rockets: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Rocket',
      },
    ],
    launches: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Launch',
      },
    ],
    details: {
      type: String,
      default: null,
    },
  },
  { autoCreate: true },
)

launchpadSchema.plugin(idPlugin)

export const Launchpad = mongoose.model<ILaunchpad>(
  'Launchpad',
  launchpadSchema,
)
