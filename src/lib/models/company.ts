import * as mongoose from 'mongoose'
import { Schema } from 'mongoose'
import { ICompany } from '../types/company'
import { idPlugin } from '../id-plugin'

const companySchema = new Schema(
  {
    name: {
      type: String,
    },
    founder: {
      type: String,
    },
    founded: {
      type: Number,
    },
    employees: {
      type: Number,
    },
    vehicles: {
      type: Number,
    },
    launch_sites: {
      type: Number,
    },
    ceo: {
      type: String,
    },
    cto: {
      type: String,
    },
    valudation: {
      type: String,
    },
    headquarters: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
    },
    links: {
      website: {
        type: String,
      },
      flickr: {
        type: String,
      },
      twitter: {
        type: String,
      },
    },
  },
  { autoCreate: true },
)

companySchema.plugin(idPlugin)

export const Company = mongoose.model<ICompany>('Company', companySchema)
