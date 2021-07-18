import * as mongoose from 'mongoose'
import { IRocket } from '../types/rocket'
import { idPlugin } from '../id-plugin'

const rocketSchema = new mongoose.Schema<
  IRocket,
  mongoose.Model<IRocket>,
  IRocket
>(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    stages: {
      type: Number,
    },
    cost_per_launch: {
      type: Number,
    },
    height: {
      meters: {
        type: Number,
      },
      feet: {
        type: Number,
      },
    },
    diameter: {
      meters: {
        type: Number,
      },
      feet: {
        type: Number,
      },
    },
    mass: {
      kg: {
        type: Number,
      },
      lb: {
        type: Number,
      },
    },
    payload_weights: {
      type: [mongoose.SchemaTypes.Mixed],
    },
    first_stage: {
      reusable: {
        type: Boolean,
      },
      engines: {
        type: Number,
      },
      burn_time_sec: {
        type: Number,
      },
      thurst_sea_level: {
        kN: {
          type: Number,
        },
        lbf: {
          type: Number,
        },
      },
    },
    second_stage: {
      engines: {
        type: Number,
      },
      burn_time_sec: {
        type: Number,
      },
      thrust: {
        kN: {
          type: Number,
        },
        lbf: {
          type: Number,
        },
      },
    },
  },
  { autoCreate: true },
)

// @ts-expect-error
rocketSchema.plugin(idPlugin)

export const Rocket = mongoose.model<IRocket>('Rocket', rocketSchema)
